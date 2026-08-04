const fs = require("node:fs");
const path = require("node:path");

const Ajv2020Module = require("ajv/dist/2020");
const addFormatsModule = require("ajv-formats");

// Handles both CommonJS and default exports.
const Ajv2020 = Ajv2020Module.default || Ajv2020Module;
const addFormats = addFormatsModule.default || addFormatsModule;

const ROOT_DIRECTORY = path.resolve(__dirname, "..");

const SCHEMA_PATH = path.join(
  ROOT_DIRECTORY,
  "schemas",
  "product.schema.json",
);

const PRODUCTS_DIRECTORY = path.join(
  ROOT_DIRECTORY,
  "data",
  "products",
);

/**
 * These are expected values rather than permanent schema restrictions.
 *
 * Pokémon could release an unusual product in the future, so mismatches
 * generate warnings rather than causing validation to fail.
 */
const CATEGORY_EXPECTATIONS = {
  "three-pack-blister": {
    boosters: 3,
    promos: 1,
  },

  "single-pack-blister": {
    boosters: 1,
    promos: 1,
  },

  "checklane-blister": {
    boosters: 1,
    promos: 3,
  },

  "premium-checklane-blister": {
    boosters: 1,
    promos: 3,
  },
};

/**
 * Recursively finds every JSON file inside a directory.
 *
 * This supports organising products into subdirectories later, for example:
 *
 * data/products/mega-evolution/
 * data/products/scarlet-and-violet/
 */
function findJsonFiles(directory) {
  if (!fs.existsSync(directory)) {
    return [];
  }

  const entries = fs.readdirSync(directory, {
    withFileTypes: true,
  });

  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      files.push(...findJsonFiles(fullPath));
      continue;
    }

    if (entry.isFile() && entry.name.endsWith(".json")) {
      files.push(fullPath);
    }
  }

  return files.sort();
}

/**
 * Converts an absolute path into a readable repository-relative path.
 */
function getRelativePath(filePath) {
  return path
    .relative(ROOT_DIRECTORY, filePath)
    .replaceAll("\\", "/");
}

/**
 * Reads and parses a JSON file.
 */
function readJsonFile(filePath) {
  const content = fs.readFileSync(filePath, "utf8");

  return JSON.parse(content);
}

/**
 * Formats an Ajv validation error into something easier to understand.
 */
function formatSchemaError(error) {
  const location = error.instancePath || "/";

  if (error.keyword === "additionalProperties") {
    return `${location}: unexpected property "${error.params.additionalProperty}"`;
  }

  if (error.keyword === "required") {
    return `${location}: missing required property "${error.params.missingProperty}"`;
  }

  if (error.keyword === "enum") {
    return `${location}: must be one of ${error.params.allowedValues.join(", ")}`;
  }

  if (error.keyword === "oneOf") {
    return `${location}: must match exactly one permitted structure`;
  }

  return `${location}: ${error.message}`;
}

/**
 * Searches recursively for empty string values.
 *
 * The schema already prevents most empty strings, but this also catches
 * empty strings placed inside flexible objects such as accessory details.
 */
function findEmptyStrings(value, currentPath = "") {
  const emptyPaths = [];

  if (typeof value === "string") {
    if (value.trim() === "") {
      emptyPaths.push(currentPath || "/");
    }

    return emptyPaths;
  }

  if (Array.isArray(value)) {
    value.forEach((item, index) => {
      emptyPaths.push(
        ...findEmptyStrings(item, `${currentPath}/${index}`),
      );
    });

    return emptyPaths;
  }

  if (value && typeof value === "object") {
    for (const [key, childValue] of Object.entries(value)) {
      emptyPaths.push(
        ...findEmptyStrings(childValue, `${currentPath}/${key}`),
      );
    }
  }

  return emptyPaths;
}

/**
 * Returns the total quantity for one content type.
 */
function getContentQuantity(product, contentType) {
  if (!Array.isArray(product.contents)) {
    return 0;
  }

  return product.contents
    .filter((content) => content.type === contentType)
    .reduce((total, content) => {
      return total + Number(content.quantity || 0);
    }, 0);
}

/**
 * Checks whether a product's contents match the usual expectations for
 * its category.
 */
function validateCategoryExpectations(product, warnings, filePath) {
  const expectation = CATEGORY_EXPECTATIONS[product.category];

  if (!expectation) {
    return;
  }

  const boosterQuantity = getContentQuantity(product, "booster");
  const promoQuantity = getContentQuantity(product, "promo-card");

  if (boosterQuantity !== expectation.boosters) {
    warnings.push({
      file: filePath,
      message:
        `Category "${product.category}" usually contains ` +
        `${expectation.boosters} booster pack(s), but this product contains ` +
        `${boosterQuantity}.`,
    });
  }

  if (promoQuantity !== expectation.promos) {
    warnings.push({
      file: filePath,
      message:
        `Category "${product.category}" usually contains ` +
        `${expectation.promos} promo card(s), but this product contains ` +
        `${promoQuantity}.`,
    });
  }
}

/**
 * Checks whether an array of explicit card IDs agrees with the supplied
 * promo quantity.
 */
function validatePromoQuantities(product, warnings, filePath) {
  if (!Array.isArray(product.contents)) {
    return;
  }

  product.contents.forEach((content, index) => {
    if (content.type !== "promo-card") {
      return;
    }

    if (
      Array.isArray(content.cards) &&
      content.selection !== "random" &&
      content.cards.length !== content.quantity
    ) {
      warnings.push({
        file: filePath,
        message:
          `contents[${index}] lists ${content.cards.length} promo card IDs ` +
          `but has quantity ${content.quantity}.`,
      });
    }

    if (
      Array.isArray(content.possibleCards) &&
      content.selection === "one-of" &&
      content.quantity !== 1
    ) {
      warnings.push({
        file: filePath,
        message:
          `contents[${index}] uses selection "one-of" but has quantity ` +
          `${content.quantity}.`,
      });
    }
  });
}

/**
 * Checks descriptions that explicitly state a booster-pack quantity.
 *
 * This catches mistakes such as:
 *
 * description: "contains 18 booster packs"
 * contents quantity: 16
 */
function validateDescriptionPackCount(product, warnings, filePath) {
  if (
    typeof product.description !== "string" ||
    !Array.isArray(product.contents)
  ) {
    return;
  }

  const match = product.description.match(
    /contains\s+(\d+)\s+booster\s+packs?/i,
  );

  if (!match) {
    return;
  }

  const describedQuantity = Number.parseInt(match[1], 10);
  const structuredQuantity = getContentQuantity(product, "booster");

  if (
    Number.isInteger(describedQuantity) &&
    structuredQuantity > 0 &&
    describedQuantity !== structuredQuantity
  ) {
    warnings.push({
      file: filePath,
      message:
        `Description states ${describedQuantity} booster pack(s), but ` +
        `structured contents contain ${structuredQuantity}.`,
    });
  }
}

/**
 * Warns when a draft product has not yet received any sources.
 */
function validateSources(product, warnings, filePath) {
  if (
    product.status === "draft" &&
    Array.isArray(product.sources) &&
    product.sources.length === 0
  ) {
    warnings.push({
      file: filePath,
      message: "Draft product has no verification sources yet.",
    });
  }
}

/**
 * Reports unresolved information created by the migration process.
 */
function validateMigrationMetadata(product, warnings, filePath) {
  if (!product.migration) {
    return;
  }

  if (
    Array.isArray(product.migration.unstructuredContents) &&
    product.migration.unstructuredContents.length > 0
  ) {
    warnings.push({
      file: filePath,
      message:
        "Product still contains unstructured migrated contents that require review.",
    });
  }

  if (
    Array.isArray(product.migration.warnings) &&
    product.migration.warnings.length > 0
  ) {
    for (const warning of product.migration.warnings) {
      warnings.push({
        file: filePath,
        message: `Migration warning: ${warning}`,
      });
    }
  }
}

/**
 * Warns when marketplace identifiers are reused by multiple products.
 *
 * This is currently a warning because some marketplaces occasionally group
 * several product variants under one listing.
 */
function validateDuplicateIdentifiers(products, warnings) {
  const usedIdentifiers = new Map();

  for (const record of products) {
    const identifiers = record.product.identifiers;

    if (!identifiers || typeof identifiers !== "object") {
      continue;
    }

    for (const [provider, value] of Object.entries(identifiers)) {
      if (typeof value !== "string" || value.trim() === "") {
        continue;
      }

      const lookupKey = `${provider}:${value}`;

      if (usedIdentifiers.has(lookupKey)) {
        const existingRecord = usedIdentifiers.get(lookupKey);

        warnings.push({
          file: record.relativePath,
          message:
            `${provider} identifier "${value}" is also used by ` +
            `"${existingRecord.product.id}" in ${existingRecord.relativePath}.`,
        });

        continue;
      }

      usedIdentifiers.set(lookupKey, record);
    }
  }
}

/**
 * Checks references from cases and displays to other sealed products.
 */
function validateProductReferences(products, errors) {
  const productsById = new Map();

  for (const record of products) {
    if (typeof record.product.id === "string") {
      productsById.set(record.product.id, record);
    }
  }

  for (const record of products) {
    const { product, relativePath } = record;

    if (!Array.isArray(product.contents)) {
      continue;
    }

    product.contents.forEach((content, index) => {
      if (content.type !== "sealed-product") {
        return;
      }

      if (content.product === product.id) {
        errors.push({
          file: relativePath,
          message:
            `contents[${index}] references the product itself: ` +
            `"${content.product}".`,
        });

        return;
      }

      if (!productsById.has(content.product)) {
        errors.push({
          file: relativePath,
          message:
            `contents[${index}] references missing sealed product ` +
            `"${content.product}".`,
        });
      }
    });
  }
}

/**
 * Detects circular sealed-product relationships.
 *
 * Example of an invalid cycle:
 *
 * case-a contains display-b
 * display-b contains case-a
 */
function validateCircularReferences(products, errors) {
  const graph = new Map();
  const filesById = new Map();

  for (const record of products) {
    const productId = record.product.id;

    if (typeof productId !== "string") {
      continue;
    }

    const references = Array.isArray(record.product.contents)
      ? record.product.contents
          .filter((content) => content.type === "sealed-product")
          .map((content) => content.product)
      : [];

    graph.set(productId, references);
    filesById.set(productId, record.relativePath);
  }

  const visiting = new Set();
  const visited = new Set();
  const reportedCycles = new Set();

  function visit(productId, pathStack) {
    if (visiting.has(productId)) {
      const cycleStart = pathStack.indexOf(productId);
      const cycle = [
        ...pathStack.slice(cycleStart),
        productId,
      ];

      const cycleKey = cycle.join(" -> ");

      if (!reportedCycles.has(cycleKey)) {
        reportedCycles.add(cycleKey);

        errors.push({
          file: filesById.get(productId) || "unknown",
          message: `Circular sealed-product reference: ${cycleKey}`,
        });
      }

      return;
    }

    if (visited.has(productId)) {
      return;
    }

    visiting.add(productId);

    const references = graph.get(productId) || [];

    for (const referencedProductId of references) {
      if (graph.has(referencedProductId)) {
        visit(referencedProductId, [
          ...pathStack,
          productId,
        ]);
      }
    }

    visiting.delete(productId);
    visited.add(productId);
  }

  for (const productId of graph.keys()) {
    visit(productId, []);
  }
}

/**
 * Prints all errors or warnings in a consistent format.
 */
function printIssues(title, issues) {
  if (issues.length === 0) {
    return;
  }

  console.log(`\n${title}`);

  for (const issue of issues) {
    console.log(`- ${issue.file}`);
    console.log(`  ${issue.message}`);
  }
}

/**
 * Main validation process.
 */
function main() {
  const errors = [];
  const warnings = [];

  if (!fs.existsSync(SCHEMA_PATH)) {
    console.error(
      `Schema not found: ${getRelativePath(SCHEMA_PATH)}`,
    );

    process.exit(1);
  }

  if (!fs.existsSync(PRODUCTS_DIRECTORY)) {
    console.error(
      `Products directory not found: ${getRelativePath(PRODUCTS_DIRECTORY)}`,
    );

    process.exit(1);
  }

  let schema;

  try {
    schema = readJsonFile(SCHEMA_PATH);
  } catch (error) {
    console.error(`Unable to parse the product schema: ${error.message}`);
    process.exit(1);
  }

  const ajv = new Ajv2020({
    allErrors: true,

    // Keeps error messages readable while the schema is under development.
    strict: false,
  });

  addFormats(ajv);

  let validateSchema;

  try {
    validateSchema = ajv.compile(schema);
  } catch (error) {
    console.error(`Unable to compile the product schema: ${error.message}`);
    process.exit(1);
  }

  const productFiles = findJsonFiles(PRODUCTS_DIRECTORY);

  if (productFiles.length === 0) {
    console.error(
      `No product JSON files found inside ${getRelativePath(PRODUCTS_DIRECTORY)}.`,
    );

    process.exit(1);
  }

  const products = [];
  const productIds = new Map();

  for (const absolutePath of productFiles) {
    const relativePath = getRelativePath(absolutePath);

    let product;

    try {
      product = readJsonFile(absolutePath);
    } catch (error) {
      errors.push({
        file: relativePath,
        message: `Invalid JSON: ${error.message}`,
      });

      continue;
    }

    const isSchemaValid = validateSchema(product);

    if (!isSchemaValid) {
      for (const schemaError of validateSchema.errors || []) {
        errors.push({
          file: relativePath,
          message: formatSchemaError(schemaError),
        });
      }
    }

    products.push({
      absolutePath,
      relativePath,
      product,
    });

    if (typeof product.id === "string") {
      const expectedFilename = `${product.id}.json`;
      const actualFilename = path.basename(absolutePath);

      if (actualFilename !== expectedFilename) {
        errors.push({
          file: relativePath,
          message:
            `Filename must match the product ID. Expected ` +
            `"${expectedFilename}", found "${actualFilename}".`,
        });
      }

      if (productIds.has(product.id)) {
        errors.push({
          file: relativePath,
          message:
            `Duplicate product ID "${product.id}". It is already used in ` +
            `${productIds.get(product.id)}.`,
        });
      } else {
        productIds.set(product.id, relativePath);
      }
    }

    const emptyStringPaths = findEmptyStrings(product);

    for (const emptyPath of emptyStringPaths) {
      errors.push({
        file: relativePath,
        message: `Empty string found at ${emptyPath}.`,
      });
    }

    validateCategoryExpectations(
      product,
      warnings,
      relativePath,
    );

    validatePromoQuantities(
      product,
      warnings,
      relativePath,
    );

    validateDescriptionPackCount(
      product,
      warnings,
      relativePath,
    );

    validateSources(
      product,
      warnings,
      relativePath,
    );

    validateMigrationMetadata(
      product,
      warnings,
      relativePath,
    );
  }

  validateProductReferences(products, errors);
  validateCircularReferences(products, errors);
  validateDuplicateIdentifiers(products, warnings);

  printIssues("ERRORS", errors);
  printIssues("WARNINGS", warnings);

  console.log("\nValidation summary");
  console.log(`- Product files: ${productFiles.length}`);
  console.log(`- Errors: ${errors.length}`);
  console.log(`- Warnings: ${warnings.length}`);

  if (errors.length > 0) {
    console.log("\nProduct validation failed.");
    process.exit(1);
  }

  console.log("\nAll products passed validation.");

  if (warnings.length > 0) {
    console.log(
      "Validation completed with warnings that require manual review.",
    );
  }
}

main();