"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT_DIRECTORY = path.resolve(__dirname, "..");
const SOURCE_FILE = path.join(ROOT_DIRECTORY, "products.json");
const OUTPUT_DIRECTORY = path.join(ROOT_DIRECTORY, "data", "products");

// Maps every v1 type string to a v2 category enum value.
const TYPE_TO_CATEGORY = {
  "Booster Pack": "booster-pack",
  "Sleeved Booster Pack": "sleeved-booster-pack",
  "Booster Bundle": "booster-bundle",
  "Half Booster Box": "half-booster-box",
  "Booster Box": "booster-box",
  "Enhanced Booster Box": "enhanced-booster-box",
  "Elite Trainer Box": "elite-trainer-box",
  "Pokemon Center Elite Trainer Box": "pokemon-center-elite-trainer-box",
  "Build & Battle Box": "build-and-battle-box",
  "Build & Battle Display": "display",
  "Build & Battle Box Display": "display",
  "Build & Battle Stadium": "build-and-battle-stadium",
  "Mini Tin": "mini-tin",
  "Mini Tin Display": "display",
  "Mini Tin Display Case": "case",
  "3-Pack Blister": "triple-blister",
  "3-Pack Blister Case": "case",
  "Single Pack Blister": "single-pack-blister",
  "Checklane Blister": "checklane-blister",
  "Premium Checklane Blister": "premium-checklane-blister",
  "Sleeved Booster Case": "case",
  "Booster Bundle Case": "case",
  "Booster Bundle Display": "display",
  "Booster Box Case": "case",
  "Enhanced Booster Case": "case",
  "Enhanced Booster Box Case": "case",
  "Elite Trainer Box Case": "case",
  "Tech Sticker Collection": "tech-sticker-collection",
  "Tech Sticker Collection Case": "case",
  "Tin": "tin",
  "Tin Case": "case",
  "Binder Collection": "binder-collection",
  "Binder Collection Case": "case",
  "Deluxe Pin Collection": "collection-box",
  "Deluxe Pin Collection Case": "case",
  "Premium Collection": "premium-collection",
  "Premium Poster Collection": "poster-collection",
  "Premium Poster Collection Case": "case",
  "Poster Collection": "poster-collection",
  "Poster Collection Case": "case",
  "Ultra-Premium Collection": "premium-collection",
  "ex Box": "collection-box",
  "ex Box Case": "case",
  "Fun Pack": "other",
};

// Expected promo-card count per category, used to decide whether multiple
// promo strings represent variants (one-of) or all-included cards.
const CATEGORY_PROMO_EXPECTATIONS = {
  "triple-blister": 1,
  "single-pack-blister": 1,
  "checklane-blister": 3,
  "premium-checklane-blister": 3,
};

// Converts a product name into a slug that satisfies the schema pattern
// ^[a-z0-9]+(?:-[a-z0-9]+)*$
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/&/g, "and")
    .replace(/['']/g, "")
    .replace(/[[\]()]/g, " ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

// Extracts a card id and optional stamp label from a single promo token
// such as "mep-009", "sv09-085 (Cosmos Holo)", or "mep-001 (Set Stamp)".
function parsePromoToken(token) {
  const match = token.trim().match(/^([A-Za-z][A-Za-z0-9_.-]+)\s*(?:\(([^)]+)\))?/);
  if (!match) return null;
  return {
    cardId: match[1].toLowerCase(),
    stamp: match[2] ? match[2].toLowerCase().replace(/\s+/g, "-") : null,
  };
}

// Parses the v1 promos array into v2 promo-card content entries.
function parsePromos(promos, category) {
  const contents = [];
  const unresolved = [];

  if (!Array.isArray(promos) || promos.length === 0) return { contents, unresolved };

  // Each v1 string may be "card-a or card-b or card-c"; flatten everything
  // into one list of tokens and track whether any "or" splitting occurred.
  let hasOrSplit = false;
  const allTokens = [];

  for (const promo of promos) {
    if (typeof promo !== "string" || !promo.trim()) continue;
    const parts = promo.split(/\s+or\s+/i);
    if (parts.length > 1) hasOrSplit = true;
    for (const part of parts) {
      const parsed = parsePromoToken(part);
      if (parsed) {
        allTokens.push(parsed);
      } else {
        unresolved.push(`Unparseable promo token: "${part.trim()}"`);
      }
    }
  }

  if (allTokens.length === 0) return { contents, unresolved };

  // Determine if this is a one-of selection or all-included.
  const expectedPromos = CATEGORY_PROMO_EXPECTATIONS[category];
  const isOneOf = hasOrSplit || (expectedPromos === 1 && allTokens.length > 1);

  // Deduplicate card IDs — the same card sometimes appears twice when one
  // entry is a Jumbo or stamp variant of the other.
  const seenIds = new Set();
  const uniqueTokens = allTokens.filter((t) => {
    if (seenIds.has(t.cardId)) return false;
    seenIds.add(t.cardId);
    return true;
  });

  if (uniqueTokens.length < allTokens.length) {
    const dupes = allTokens.filter((t, i) => allTokens.findIndex((x) => x.cardId === t.cardId) !== i);
    const dupeList = dupes.map((t) => (t.stamp ? `${t.cardId} (${t.stamp})` : t.cardId)).join(", ");
    unresolved.push(`Duplicate card IDs removed — likely Jumbo or stamp variants: ${dupeList}`);
  }

  const cardIds = uniqueTokens.map((t) => t.cardId);

  // Resolve stamp: apply only if every unique token shares the same stamp value.
  const firstStamp = uniqueTokens[0].stamp;
  const allSameStamp = uniqueTokens.every((t) => t.stamp === firstStamp);
  const stamp = allSameStamp && firstStamp ? firstStamp : null;

  if (!allSameStamp) {
    const stampList = uniqueTokens.map((t) => (t.stamp ? `${t.cardId}(${t.stamp})` : t.cardId)).join(", ");
    unresolved.push(`Mixed stamps across promo cards — review individually: ${stampList}`);
  }

  let entry;

  if (isOneOf) {
    entry = { type: "promo-card", possibleCards: cardIds, selection: "one-of", quantity: 1 };
  } else if (cardIds.length === 1) {
    entry = { type: "promo-card", card: cardIds[0], quantity: 1 };
  } else {
    entry = { type: "promo-card", cards: cardIds, quantity: cardIds.length };
  }

  if (stamp) entry.stamp = stamp;
  contents.push(entry);

  return { contents, unresolved };
}

// Parses the v1 sleeves array, e.g. ["65 Mega Lucario"].
function parseSleeves(sleeves) {
  const contents = [];
  const unresolved = [];

  if (!Array.isArray(sleeves)) return { contents, unresolved };

  for (const sleeve of sleeves) {
    if (typeof sleeve !== "string" || !sleeve.trim()) continue;
    const match = sleeve.trim().match(/^(\d+)\s+(.+)$/);
    if (match) {
      contents.push({
        type: "accessory",
        category: "sleeves",
        quantity: Number(match[1]),
        name: match[2].trim(),
      });
    } else {
      unresolved.push(`Unparseable sleeves entry: "${sleeve}"`);
    }
  }

  return { contents, unresolved };
}

// Parses the v1 coins array, e.g. [{ "id": "1", "size": "normal", "pokemon": "Lucario" }].
function parseCoins(coins) {
  const contents = [];
  const unresolved = [];

  if (!Array.isArray(coins)) return { contents, unresolved };

  for (const coin of coins) {
    if (!coin || typeof coin !== "object") continue;

    const entry = { type: "accessory", category: "coin", quantity: 1 };

    if (coin.pokemon) entry.name = coin.pokemon;
    if (coin.size && coin.size !== "normal") entry.details = { size: coin.size };

    contents.push(entry);
  }

  return { contents, unresolved };
}

// Parses the v1 damage_markers string, e.g. "6 damage-counter dice".
function parseDamageMarkers(damageMarkers) {
  const contents = [];
  const unresolved = [];

  if (typeof damageMarkers !== "string" || !damageMarkers.trim()) {
    return { contents, unresolved };
  }

  const match = damageMarkers.match(/^(\d+)\s+damage-counter dice/i);

  if (match) {
    contents.push({
      type: "accessory",
      category: "damage-counter-dice",
      quantity: Number(match[1]),
    });
  } else {
    unresolved.push(`Unparseable damage_markers: "${damageMarkers}"`);
  }

  return { contents, unresolved };
}

// Parses the v1 "other" field using regex patterns for common accessory types.
// Anything that doesn't match a known pattern is returned as unresolved.
function parseOther(other) {
  const contents = [];
  const unresolved = [];

  if (typeof other !== "string" || !other.trim()) return { contents, unresolved };

  let remainder = other;

  function consume(pattern, handler) {
    remainder = remainder.replace(pattern, (match, ...rest) => {
      // rest is: captureGroup1, captureGroup2, ..., offset, originalString
      const captures = rest.slice(0, rest.length - 2);
      handler(...captures);
      return "";
    });
  }

  consume(/(\d+)\s+competition-legal coin-flip die/gi, (n) => {
    contents.push({ type: "accessory", category: "coin-flip-die", quantity: Number(n) });
  });

  consume(/(\d+)\s+condition markers?/gi, (n) => {
    contents.push({ type: "accessory", category: "condition-marker", quantity: Number(n) });
  });

  consume(/(\d+)[^,]*?dividers?/gi, (n) => {
    contents.push({ type: "accessory", category: "divider", quantity: Number(n) });
  });

  consume(/A player['’]?s guide[^,]*/gi, () => {
    contents.push({ type: "accessory", category: "players-guide", quantity: 1 });
  });

  consume(/(\d+)\s+Pok[eé]mon TCG Energy cards/gi, (n) => {
    contents.push({ type: "accessory", category: "energy-card", quantity: Number(n) });
  });

  consume(/A (\d+)-card ready-to-play deck/gi, () => {
    contents.push({ type: "accessory", category: "deck", quantity: 1 });
  });

  consume(/(\d+)\s+Stickers?/gi, (n) => {
    contents.push({ type: "accessory", category: "sticker", quantity: Number(n) });
  });

  consume(/(\d+)\s+Pok[eé]mon art cards?/gi, (n) => {
    contents.push({ type: "accessory", category: "art-card", quantity: Number(n) });
  });

  consume(/(\d+)?\s*code cards?\s+for\s+Pok[eé]mon TCG Live/gi, (n) => {
    contents.push({ type: "accessory", category: "code-card", quantity: Number(n || 1) });
  });

  const cleaned = remainder.replace(/[,\s]+/g, " ").trim();
  if (cleaned) unresolved.push(cleaned);

  return { contents, unresolved };
}

// Builds the v2 contents array from all v1 content fields.
function buildContents(product, category) {
  const contents = [];
  const unresolved = [];

  if (product.packs && typeof product.packs === "object") {
    for (const [setId, rawQty] of Object.entries(product.packs)) {
      const quantity = Number(rawQty);
      if (Number.isInteger(quantity) && quantity > 0) {
        contents.push({ type: "booster", set: setId, quantity });
      } else {
        unresolved.push(`Invalid pack quantity for set "${setId}": ${JSON.stringify(rawQty)}`);
      }
    }
  }

  const promoResult = parsePromos(product.promos, category);
  contents.push(...promoResult.contents);
  unresolved.push(...promoResult.unresolved);

  const sleeveResult = parseSleeves(product.sleeves);
  contents.push(...sleeveResult.contents);
  unresolved.push(...sleeveResult.unresolved);

  const markerResult = parseDamageMarkers(product.damage_markers);
  contents.push(...markerResult.contents);
  unresolved.push(...markerResult.unresolved);

  const coinResult = parseCoins(product.coins);
  contents.push(...coinResult.contents);
  unresolved.push(...coinResult.unresolved);

  const otherResult = parseOther(product.other);
  contents.push(...otherResult.contents);
  unresolved.push(...otherResult.unresolved);

  return { contents, unresolved };
}

// Scans data/products/ for existing files and returns two sets:
// - migratedOriginalIds: v1 product-N ids already migrated (via migration.originalId)
// - existingSlugs: v2 id slugs already in use (to avoid collisions)
function loadExistingProducts(outputDirectory) {
  const migratedOriginalIds = new Set();
  const existingSlugs = new Set();

  function scan(dir) {
    if (!fs.existsSync(dir)) return;
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const fullPath = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (entry.isFile() && entry.name.endsWith(".json")) {
        try {
          const data = JSON.parse(fs.readFileSync(fullPath, "utf8"));
          if (data.id) existingSlugs.add(data.id);
          if (data.migration?.originalId) migratedOriginalIds.add(data.migration.originalId);
        } catch {
          // Ignore malformed files.
        }
      }
    }
  }

  scan(outputDirectory);
  return { migratedOriginalIds, existingSlugs };
}

// Converts a single v1 product object into a v2 draft product.
function migrateProduct(product, existingSlugs) {
  const warnings = [];

  // Category
  const rawType = product.type;
  let category;

  if (!rawType || rawType === "null") {
    category = "other";
    warnings.push(`Unknown type "${rawType}" mapped to "other" — requires manual review.`);
  } else {
    category = TYPE_TO_CATEGORY[rawType];
    if (!category) {
      category = "other";
      warnings.push(`Unrecognised type "${rawType}" mapped to "other" — requires manual review.`);
    }
  }

  // ID — slugify name, then deduplicate if needed.
  let slug = slugify(product.name || product.id);
  if (existingSlugs.has(slug)) {
    let counter = 2;
    while (existingSlugs.has(`${slug}-${counter}`)) counter++;
    slug = `${slug}-${counter}`;
    warnings.push(`Slug collision — deduplicated to "${slug}". Rename to a more descriptive id.`);
  }
  existingSlugs.add(slug);

  // Data-quality checks
  if (!product.packs || Object.keys(product.packs).length === 0) {
    warnings.push("Missing packs data — booster contents could not be determined.");
  }

  const { contents, unresolved } = buildContents(product, category);

  // Identifiers — only include non-empty values.
  const identifiers = {};
  if (product.tcgplayer_id) identifiers.tcgplayer = String(product.tcgplayer_id);
  if (product.cardmarket_id) identifiers.cardmarket = String(product.cardmarket_id);
  if (product.cardtrader_id) identifiers.cardtrader = String(product.cardtrader_id);

  // Images
  const images = [];
  if (product.image_url) images.push({ type: "front", url: product.image_url });

  // Description — skip if empty or still contains template placeholders.
  const hasPlaceholder = /\[number\]|\[\d+\]/i.test(product.description || "");
  const description =
    !hasPlaceholder && product.description && product.description.trim()
      ? product.description
      : null;

  if (hasPlaceholder) {
    warnings.push("Description skipped — contains unfilled template placeholders.");
  }

  // Cases and displays still use flat booster counts rather than
  // sealed-product references. Flag them for manual restructuring.
  if (category === "case" || category === "display") {
    warnings.push(
      `Category is "${category}" — booster contents should be replaced with ` +
        "sealed-product references once child product IDs are known.",
    );
  }

  // Assemble migration metadata.
  const migration = { originalId: product.id };
  if (unresolved.length > 0) migration.unstructuredContents = unresolved;
  if (warnings.length > 0) migration.warnings = warnings;

  // Build the v2 object in field order.
  const v2 = { id: slug, name: product.name || "", category };

  if (product.release_date) v2.releaseDate = product.release_date;
  if (Object.keys(identifiers).length > 0) v2.identifiers = identifiers;
  if (images.length > 0) v2.images = images;

  v2.contents = contents;

  if (description) v2.description = description;

  v2.sources = [];
  v2.status = "draft";
  v2.migration = migration;

  return v2;
}

function main() {
  if (!fs.existsSync(SOURCE_FILE)) {
    console.error("products.json not found.");
    process.exit(1);
  }

  let products;

  try {
    products = JSON.parse(fs.readFileSync(SOURCE_FILE, "utf8"));
  } catch (error) {
    console.error(`Failed to parse products.json: ${error.message}`);
    process.exit(1);
  }

  if (!Array.isArray(products)) {
    console.error("products.json must be a JSON array.");
    process.exit(1);
  }

  fs.mkdirSync(OUTPUT_DIRECTORY, { recursive: true });

  const { migratedOriginalIds, existingSlugs } = loadExistingProducts(OUTPUT_DIRECTORY);

  let written = 0;
  let skipped = 0;
  let withWarnings = 0;
  let withUnresolved = 0;

  for (const product of products) {
    if (migratedOriginalIds.has(product.id)) {
      console.log(`skip   ${product.id} — already migrated`);
      skipped++;
      continue;
    }

    const v2 = migrateProduct(product, existingSlugs);
    const outputPath = path.join(OUTPUT_DIRECTORY, `${v2.id}.json`);

    fs.writeFileSync(outputPath, JSON.stringify(v2, null, 2) + "\n", "utf8");
    written++;

    const hasWarnings = v2.migration?.warnings?.length > 0;
    const hasUnresolved = v2.migration?.unstructuredContents?.length > 0;

    if (hasWarnings) withWarnings++;
    if (hasUnresolved) withUnresolved++;

    const flags = [
      hasWarnings ? "WARN" : null,
      hasUnresolved ? "UNRESOLVED" : null,
    ]
      .filter(Boolean)
      .join(" ");

    console.log(`write  ${v2.id}${flags ? `  [${flags}]` : ""}`);
  }

  console.log(`
Migration summary
  Written:    ${written}
  Skipped:    ${skipped} (already in data/products/)
  Warnings:   ${withWarnings}
  Unresolved: ${withUnresolved}

Run 'npm run validate' to check the migrated files.
Products with WARN or UNRESOLVED in migration.warnings / migration.unstructuredContents
require manual review before status can be changed from "draft" to "verified".`);
}

main();
