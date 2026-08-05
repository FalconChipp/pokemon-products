#!/usr/bin/env node
"use strict";

/**
 * Fixes three related data issues left by migration:
 *  1. Typos in card IDs and stamp names inside unstructuredContents + contents
 *  2. Mixed-stamp promo entries — split into one entry per stamp
 *  3. Jumbo/lenticular promo cards that were deduplicated away — re-add them
 *  4. Removes stray garbage text from unstructuredContents
 */

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const DIR = path.join(ROOT, "data", "products");

// ── Typo correction tables ────────────────────────────────────────────────────

const STAMP_TYPOS = {
  "cosmoc-holo": "cosmos-holo",
  "poekmon-center-stamp": "pokemon-center-stamp",
};

// Applied to card IDs found in unstructuredContents AND in contents promo entries
const CARD_ID_FIXES = {
  "me03-49": "me03-049",
};

// Unstructured content strings to delete outright (garbage migration artifacts)
const GARBAGE_PATTERNS = [/^per tin per tin$/i];

// ── Jumbo entries to inject ───────────────────────────────────────────────────

const JUMBO_ENTRIES = {
  "151-blooming-waters-premium-collection": {
    card: "sv03.5-009",
    stamp: "jumbo",
  },
  "151-zapdos-ex-collection": { card: "svp-049", stamp: "jumbo" },
  "ascended-heroes-focused-fighters-premium-collection": {
    card: "me02.5-116",
    stamp: "jumbo",
  },
  "ascended-heroes-mega-emboar-ex-box": {
    card: "mep-035",
    stamp: "jumbo-lenticular",
  },
  "ascended-heroes-mega-feraligatr-ex-box": {
    card: "mep-036",
    stamp: "jumbo-lenticular",
  },
  "ascended-heroes-mega-meganium-ex-box": {
    card: "mep-034",
    stamp: "jumbo-lenticular",
  },
  "paldean-fates-great-tusk-ex-and-iron-treads-ex-premium-collection": {
    card: "svp-072",
    stamp: "jumbo-expansion-stamp",
  },
  "paldean-fates-premium-collection-meowscarada-ex": {
    card: "svp-078",
    stamp: "jumbo",
  },
  "paldean-fates-premium-collection-quaquaval-ex": {
    card: "svp-084",
    stamp: "jumbo",
  },
  "paldean-fates-premium-collection-skeledirge-ex": {
    card: "svp-081",
    stamp: "jumbo",
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────────

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}
function writeJson(p, data) {
  fs.writeFileSync(p, JSON.stringify(data, null, 2) + "\n", "utf8");
}

function fixStampName(s) {
  return STAMP_TYPOS[s] ?? s;
}
function fixCardId(id) {
  return CARD_ID_FIXES[id] ?? id;
}

/**
 * Parses the "review individually" list from a Mixed stamps unstructured line.
 * Returns a Map<stamp|null, string[]> where null means no stamp (plain card).
 */
function parseMixedStampLine(line) {
  const match = line.match(/review individually:\s*(.+)/);
  if (!match) return null;

  const byStamp = new Map(); // stamp (or null) → cardId[]
  for (const rawToken of match[1].split(",").map((s) => s.trim())) {
    const m = rawToken.match(/^([A-Za-z0-9_.-]+)\s*(?:\(([^)]+)\))?$/);
    if (!m) continue;
    const cardId = fixCardId(m[1]);
    const stamp = m[2] ? fixStampName(m[2]) : null;
    if (!byStamp.has(stamp)) byStamp.set(stamp, []);
    byStamp.get(stamp).push(cardId);
  }
  return byStamp;
}

/**
 * Builds new promo-card content entries from a stamp → cards map,
 * preserving the selection/possibleCards structure when present.
 */
function buildPromoEntries(byStamp, existingEntry) {
  const entries = [];
  for (const [stamp, cards] of byStamp) {
    let entry;

    // If existing entry uses possibleCards/selection, carry that structure over
    if (existingEntry?.possibleCards && cards.length > 1) {
      entry = {
        type: "promo-card",
        possibleCards: cards,
        selection: existingEntry.selection ?? "one-of",
        quantity: existingEntry.quantity ?? 1,
      };
    } else if (cards.length === 1) {
      entry = { type: "promo-card", card: cards[0], quantity: 1 };
    } else {
      entry = { type: "promo-card", cards, quantity: cards.length };
    }

    if (stamp) entry.stamp = stamp;
    entries.push(entry);
  }
  return entries;
}

/**
 * Returns all card IDs mentioned in a promo-card content entry.
 */
function getEntryCardIds(entry) {
  if (entry.card) return [entry.card];
  if (entry.cards) return entry.cards;
  if (entry.possibleCards) return entry.possibleCards;
  return [];
}

// ── Main ──────────────────────────────────────────────────────────────────────

function processProduct(filePath) {
  const product = readJson(filePath);
  const id = product.id;
  let changed = false;
  const log = [];

  // ── 1. Fix card IDs in promo-card contents ──────────────────────────────
  if (Array.isArray(product.contents)) {
    for (const entry of product.contents) {
      if (entry.type !== "promo-card") continue;
      for (const field of ["card", "cards", "possibleCards"]) {
        if (!entry[field]) continue;
        if (Array.isArray(entry[field])) {
          const fixed = entry[field].map(fixCardId);
          if (fixed.some((v, i) => v !== entry[field][i])) {
            log.push(`  card ID fix: ${entry[field].join(",")} → ${fixed.join(",")}`);
            entry[field] = fixed;
            changed = true;
          }
        } else {
          const fixed = fixCardId(entry[field]);
          if (fixed !== entry[field]) {
            log.push(`  card ID fix: ${entry[field]} → ${fixed}`);
            entry[field] = fixed;
            changed = true;
          }
        }
      }
    }
  }

  // ── 2. Process unstructuredContents ────────────────────────────────────
  const unstructured = product.migration?.unstructuredContents ?? [];
  const keepUnstructured = [];

  for (const line of unstructured) {
    // Remove garbage
    if (GARBAGE_PATTERNS.some((re) => re.test(line.trim()))) {
      log.push(`  removed garbage: "${line}"`);
      changed = true;
      continue;
    }

    // Fix typos inside unstructured text
    let fixedLine = line;
    for (const [bad, good] of Object.entries(STAMP_TYPOS)) {
      if (fixedLine.includes(bad)) {
        fixedLine = fixedLine.replaceAll(bad, good);
      }
    }
    for (const [bad, good] of Object.entries(CARD_ID_FIXES)) {
      if (fixedLine.includes(bad)) {
        fixedLine = fixedLine.replaceAll(bad, good);
      }
    }
    if (fixedLine !== line) {
      log.push(`  fixed unstructured text typo`);
      changed = true;
    }

    // Handle Mixed stamps line
    if (fixedLine.includes("Mixed stamps across promo cards")) {
      const byStamp = parseMixedStampLine(fixedLine);
      if (!byStamp) {
        keepUnstructured.push(fixedLine);
        continue;
      }

      // Find the promo-card entry that contains these cards
      const allCardIds = [...byStamp.values()].flat();
      const existingIdx = product.contents?.findIndex(
        (e) =>
          e.type === "promo-card" &&
          getEntryCardIds(e).some((cid) => allCardIds.includes(cid)),
      );

      if (existingIdx == null || existingIdx < 0) {
        // No matching entry found — keep the unstructured line for manual review
        keepUnstructured.push(fixedLine);
        continue;
      }

      const existingEntry = product.contents[existingIdx];
      const uniqueStamps = new Set(byStamp.keys());
      const hasMultipleStamps = uniqueStamps.size > 1;

      if (!hasMultipleStamps) {
        // All cards share the same stamp — just add it to the existing entry
        const stamp = [...uniqueStamps][0];
        if (stamp) {
          existingEntry.stamp = stamp;
          log.push(`  added stamp "${stamp}" to existing promo-card entry`);
        }
        // Update card IDs in the entry in case they were fixed
        const fixedIds = allCardIds;
        if (existingEntry.cards) existingEntry.cards = fixedIds;
        else if (existingEntry.possibleCards) existingEntry.possibleCards = fixedIds;
        else if (existingEntry.card) existingEntry.card = fixedIds[0];
      } else {
        // Multiple stamps — replace the single entry with split entries
        const newEntries = buildPromoEntries(byStamp, existingEntry);
        product.contents.splice(existingIdx, 1, ...newEntries);
        log.push(
          `  split into ${newEntries.length} stamp-separated promo entries: ` +
            newEntries
              .map((e) => (e.stamp ? `(${e.stamp})` : "(plain)"))
              .join(", "),
        );
      }
      changed = true;
      // Don't push to keepUnstructured — this line is resolved
      continue;
    }

    keepUnstructured.push(fixedLine);
  }

  if (product.migration) {
    if (keepUnstructured.length !== unstructured.length || changed) {
      if (keepUnstructured.length > 0) {
        product.migration.unstructuredContents = keepUnstructured;
      } else {
        delete product.migration.unstructuredContents;
      }
    }
    // Clean up empty migration object
    if (
      !product.migration.warnings?.length &&
      !product.migration.unstructuredContents?.length
    ) {
      if (product.migration.originalId) {
        delete product.migration.warnings;
        delete product.migration.unstructuredContents;
      } else {
        delete product.migration;
      }
    }
  }

  // ── 3. Add jumbo promo entry if needed ─────────────────────────────────
  const jumbo = JUMBO_ENTRIES[id];
  if (jumbo) {
    const alreadyPresent = product.contents?.some(
      (e) =>
        e.type === "promo-card" &&
        e.stamp === jumbo.stamp &&
        (e.card === jumbo.card || e.cards?.includes(jumbo.card)),
    );
    if (!alreadyPresent) {
      product.contents.push({
        type: "promo-card",
        card: jumbo.card,
        quantity: 1,
        stamp: jumbo.stamp,
      });
      log.push(`  added jumbo entry: ${jumbo.card} (${jumbo.stamp})`);
      changed = true;

      // Remove the "Duplicate card IDs removed" unstructured line for this card
      if (product.migration?.unstructuredContents) {
        const before = product.migration.unstructuredContents.length;
        product.migration.unstructuredContents =
          product.migration.unstructuredContents.filter(
            (u) => !u.includes(jumbo.card),
          );
        if (product.migration.unstructuredContents.length !== before) {
          if (!product.migration.unstructuredContents.length) {
            delete product.migration.unstructuredContents;
          }
        }
      }
    }
  }

  if (changed) {
    writeJson(filePath, product);
    console.log(`OK  ${id}`);
    for (const l of log) console.log(l);
  }

  return changed;
}

function main() {
  const files = fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => path.join(DIR, f));

  let updated = 0;
  for (const file of files) {
    if (processProduct(file)) updated++;
  }
  console.log(`\nUpdated ${updated} files.`);
}

main();
