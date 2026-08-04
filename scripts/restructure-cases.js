#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "data", "products");
const V1_PATH = path.join(ROOT, "products.json");

// Maps v1 type strings to child product categories to search within
const TYPE_TO_CHILD_CATEGORIES = {
  "Booster Box Case": ["booster-box"],
  "Enhanced Booster Box Case": ["enhanced-booster-box"],
  "Enhanced Booster Case": ["enhanced-booster-box"],
  "Elite Trainer Box Case": ["elite-trainer-box"],
  "Sleeved Booster Case": ["sleeved-booster-pack"],
  "Booster Bundle Case": ["booster-bundle"],
  "3-Pack Blister Case": ["triple-blister"],
  "Tech Sticker Collection Case": ["tech-sticker-collection"],
  "Tin Case": ["tin"],
  "Binder Collection Case": ["binder-collection"],
  "Premium Collection Case": ["premium-collection"],
  "Premium Poster Collection Case": ["poster-collection"],
  "Poster Collection Case": ["poster-collection"],
  "Deluxe Pin Collection Case": ["collection-box"],
  "ex Box Case": ["collection-box"],
  "Mini Tin Display Case": ["display"],
  "Build & Battle Box Display": ["build-and-battle-box"],
  "Build & Battle Display": ["build-and-battle-box"],
  "Mini Tin Display": ["mini-tin"],
  "Booster Bundle Display": ["booster-bundle"],
};

// Explicit child lists for cases where the generic lookup is ambiguous:
// - Mini Tin Display Cases match both mini-tin-displays and booster-bundle-displays
// - ex Box Cases and Deluxe Pin Collection Cases match unrelated collection-box products
// - The 5 unknown-type cases (null v1 type) are resolved by description + pack math
const MANUAL_CHILDREN = {
  // Mini Tin Display Cases — filter to only the mini-tin-display child
  "151-mini-tin-display-case": ["151-mini-tin-display"],
  "ascended-heroes-mini-tin-display-case": ["ascended-heroes-mini-tin-display"],
  "paldean-fates-mini-tin-display-case": ["paldean-fates-mini-tin-display"],

  // Deluxe Pin Collection Case — only contains its own product, not the ex boxes
  "ascended-heroes-first-partners-deluxe-pin-collection-case": [
    "ascended-heroes-first-partners-deluxe-pin-collection",
  ],

  // ex Box Case — contains the 3 Mega ex Boxes, not the Collections or Deluxe Pin
  "ascended-heroes-mega-ex-box-case": [
    "ascended-heroes-mega-emboar-ex-box",
    "ascended-heroes-mega-feraligatr-ex-box",
    "ascended-heroes-mega-meganium-ex-box",
  ],

  // Unknown v1 type — resolved from description + pack count matching:
  // 6 Alakazam ex Collections × 4 packs = 24 packs ✓
  "151-alakazam-ex-collection-case": ["151-alakazam-ex-collection"],
  // 4 Ultra-Premium Collections × 16 packs = 64, but parent has 56 — mismatch flagged
  "151-ultra-premium-collection-case": ["151-ultra-premium-collection"],
  // 6 Zapdos ex Collections × 4 packs = 24 packs ✓
  "151-zapdos-ex-collection-case": ["151-zapdos-ex-collection"],
  // "12 of each Collection" — Erika (2) + Larry (2) = 4 per set, 48/4 = 12 each ✓
  "ascended-heroes-collection-case": [
    "ascended-heroes-collection-erika",
    "ascended-heroes-collection-larry",
  ],
  // "6 Collections" — 3 premium collections × 2 each × 8 packs = 48 packs ✓
  "paldean-fates-premium-collection-case": [
    "paldean-fates-premium-collection-meowscarada-ex",
    "paldean-fates-premium-collection-quaquaval-ex",
    "paldean-fates-premium-collection-skeledirge-ex",
  ],
};

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, "utf8"));
}

function writeJson(filePath, data) {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function loadProducts() {
  return fs
    .readdirSync(PRODUCTS_DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => ({
      file: f,
      product: readJson(path.join(PRODUCTS_DIR, f)),
    }));
}

function getBoosterPacks(product) {
  return product.contents?.find((c) => c.type === "booster")?.quantity ?? 0;
}

function main() {
  const v1Products = readJson(V1_PATH);
  const v1ById = Object.fromEntries(v1Products.map((p) => [p.id, p]));

  const allRecords = loadProducts();
  const byId = Object.fromEntries(
    allRecords.map((r) => [r.product.id, r.product]),
  );

  // Snapshot booster-pack counts before any modifications so child quantities
  // are computed from the original flat data even when a display is processed
  // before its parent case.
  const originalPacks = Object.fromEntries(
    allRecords.map((r) => [r.product.id, getBoosterPacks(r.product)]),
  );

  // Index: "set|category" -> [product]
  const childIndex = new Map();
  for (const { product } of allRecords) {
    const b = product.contents?.find((c) => c.type === "booster");
    if (!b?.set) continue;
    const key = `${b.set}|${product.category}`;
    if (!childIndex.has(key)) childIndex.set(key, []);
    childIndex.get(key).push(product);
  }

  const casesAndDisplays = allRecords.filter(
    (r) =>
      r.product.category === "case" || r.product.category === "display",
  );

  let updated = 0;
  let skipped = 0;
  const issues = [];

  for (const { file, product } of casesAndDisplays) {
    const filePath = path.join(PRODUCTS_DIR, file);
    const v1 = v1ById[product.migration?.originalId ?? ""];
    const v1Type = v1?.type ?? null;

    const parentBooster = product.contents?.find((c) => c.type === "booster");
    if (!parentBooster?.set) {
      issues.push(`SKIP  ${product.id} — no booster set`);
      skipped++;
      continue;
    }

    const parentPacks = parentBooster.quantity;
    const parentSet = parentBooster.set;

    // Determine child product IDs
    let childIds;
    if (MANUAL_CHILDREN[product.id]) {
      childIds = MANUAL_CHILDREN[product.id];
    } else {
      const childCats = TYPE_TO_CHILD_CATEGORIES[v1Type];
      if (!childCats) {
        issues.push(`SKIP  ${product.id} — unknown v1 type "${v1Type}"`);
        skipped++;
        continue;
      }
      childIds = childCats
        .flatMap((cat) => childIndex.get(`${parentSet}|${cat}`) ?? [])
        .map((c) => c.id)
        .filter((id) => id !== product.id);
    }

    if (childIds.length === 0) {
      issues.push(`SKIP  ${product.id} — no child products found`);
      skipped++;
      continue;
    }

    // Validate all children exist
    const missingChildren = childIds.filter((id) => !byId[id]);
    if (missingChildren.length > 0) {
      issues.push(
        `SKIP  ${product.id} — missing children: ${missingChildren.join(", ")}`,
      );
      skipped++;
      continue;
    }

    // Calculate child quantity using pre-restructure pack counts.
    // With N children each containing P packs, and a total of T parent packs:
    //   childQty = T / (N_1*P_1 + N_2*P_2 + ...) where all N_i are equal
    // Simplified for equal quantities: childQty = T / sum(P_i)
    const childPacksTotal = childIds.reduce(
      (sum, id) => sum + (originalPacks[id] ?? 0),
      0,
    );

    const warnings = (product.migration?.warnings ?? []).filter(
      (w) => !w.includes("booster contents should be replaced"),
    );

    let childQty;
    if (childPacksTotal === 0) {
      issues.push(`SKIP  ${product.id} — children have no booster packs`);
      skipped++;
      continue;
    } else if (parentPacks % childPacksTotal === 0) {
      childQty = parentPacks / childPacksTotal;
    } else {
      childQty = Math.max(1, Math.round(parentPacks / childPacksTotal));
      const actual = childQty * childPacksTotal;
      warnings.push(
        `Pack count mismatch: parent has ${parentPacks} packs, children total ` +
          `${childPacksTotal} per set (${childIds.join(", ")}). ` +
          `Child quantity set to ${childQty} (${actual} packs implied). Verify actual assortment.`,
      );
      issues.push(
        `WARN  ${product.id} — pack mismatch (parent ${parentPacks}, children ${childPacksTotal}/set → qty ${childQty})`,
      );
    }

    if (childIds.length > 1) {
      warnings.push(
        `Contains ${childIds.length} child product variants — verify actual assortment and quantities.`,
      );
    }

    // Replace all contents with sealed-product references.
    // Non-booster content (accessories, promos) is stripped because it belongs
    // to the child products, not the case/display itself.
    const newContents = childIds.map((id) => ({
      type: "sealed-product",
      product: id,
      quantity: childQty,
    }));

    const migration = { ...product.migration };
    if (warnings.length > 0) {
      migration.warnings = warnings;
    } else {
      delete migration.warnings;
    }
    if (!migration.unstructuredContents?.length) {
      delete migration.unstructuredContents;
    }
    if (Object.keys(migration).length === 0 || !migration.originalId) {
      // Keep at least originalId if present
    }

    const updatedProduct = { ...product, contents: newContents };
    if (Object.keys(migration).length > 0) {
      updatedProduct.migration = migration;
    } else {
      delete updatedProduct.migration;
    }

    writeJson(filePath, updatedProduct);

    const childSummary = childIds
      .map((id) => `${id}×${childQty}`)
      .join(", ");
    console.log(`OK    ${product.id}`);
    console.log(`      → ${childSummary}`);
    updated++;
  }

  console.log(`\n=== Summary ===`);
  console.log(`Updated: ${updated}`);
  console.log(`Skipped: ${skipped}`);

  if (issues.length > 0) {
    console.log(`\nIssues:`);
    for (const issue of issues) {
      console.log(`  ${issue}`);
    }
  }
}

main();
