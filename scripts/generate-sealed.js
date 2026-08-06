#!/usr/bin/env node
"use strict";

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const PRODUCTS_DIR = path.join(ROOT, "data", "products");
const SEALED_DIR = path.join(ROOT, "data", "sealed");

// ── Configuration ─────────────────────────────────────────────────────────────

const ERA_MAP = {
  me01: "me", me02: "me", "me02.5": "me", me03: "me", me04: "me", me05: "me",
  sv01: "sv", sv02: "sv", sv03: "sv", "sv03.5": "sv", sv04: "sv", "sv04.5": "sv", sv05: "sv",
};

const SET_PREFIXES = {
  me01:    ["mega-evolution-", "mega-heroes-"],
  me02:    ["phantasmal-flames-"],
  "me02.5": ["ascended-heroes-"],
  me03:    ["perfect-order-"],
  me04:    ["chaos-rising-"],
  me05:    ["pitch-black-"],
  sv01:    ["scarlet-and-violet-"],
  sv02:    ["paldea-evolved-"],
  sv03:    ["obsidian-flames-"],
  "sv03.5": ["151-"],
  sv04:    ["paradox-rift-"],
  "sv04.5": ["paldean-fates-"],
  sv05:    ["temporal-forces-"],
};

// Manual overrides: fileGroup = target filename slug, variantId = id within variants[]
// set: optional explicit set for products with empty contents (fun packs)
const MANUAL_GROUPS = {
  // me01 — non-standard ID prefixes
  "me01-triple-blister-psyduck":             { fileGroup: "triple-blister", variantId: "psyduck" },
  "mega-evolution-3-pack-blister-golduck":   { fileGroup: "triple-blister", variantId: "golduck" },

  // me02.5 — tech sticker collections use "mega-evolution-ascended-heroes-" prefix
  "mega-evolution-ascended-heroes-tech-sticker-collection-charmander": { fileGroup: "tech-sticker-collection", variantId: "charmander" },
  "mega-evolution-ascended-heroes-tech-sticker-collection-gastly":     { fileGroup: "tech-sticker-collection", variantId: "gastly" },

  // me02.5 — collection-box splits into three distinct product types
  "ascended-heroes-collection-erika":                   { fileGroup: "collection",           variantId: "erika" },
  "ascended-heroes-collection-larry":                   { fileGroup: "collection",           variantId: "larry" },
  "ascended-heroes-first-partners-deluxe-pin-collection": { fileGroup: "deluxe-pin-collection", variantId: "first-partners" },
  "ascended-heroes-mega-emboar-ex-box":                 { fileGroup: "mega-ex-box",          variantId: "emboar" },
  "ascended-heroes-mega-feraligatr-ex-box":             { fileGroup: "mega-ex-box",          variantId: "feraligatr" },
  "ascended-heroes-mega-meganium-ex-box":               { fileGroup: "mega-ex-box",          variantId: "meganium" },

  // sv03.5 — collection-box products get a descriptive file name
  "151-alakazam-ex-collection": { fileGroup: "ex-collection", variantId: "alakazam" },
  "151-zapdos-ex-collection":   { fileGroup: "ex-collection", variantId: "zapdos" },

  // sv03.5 — ultra premium is a distinct product type
  "151-ultra-premium-collection": { fileGroup: "ultra-premium-collection", variantId: "standard" },

  // sv03.5 — retailer bundle (category: other, prefix not in SET_PREFIXES)
  "sams-club-151-4-mini-tins-4-promo-cards-bundle": { fileGroup: "bundle", variantId: "sams-club", set: "sv03.5" },

  // sv04.5 — tin-case has category "tin" (data error); keep as a tin variant
  "paldean-fates-tin-case": { fileGroup: "tin", variantId: "tin-case" },

  // sv04.5 — international tins are a separate product line from the regular tins
  "paldean-fates-international-tin-charizard-ex":   { fileGroup: "international-tin", variantId: "charizard-ex" },
  "paldean-fates-international-tin-great-tusk-ex":  { fileGroup: "international-tin", variantId: "great-tusk-ex" },

  // Fun packs have empty contents[] — set must be supplied explicitly
  "scarlet-and-violet-fun-pack": { fileGroup: "fun-pack", variantId: "standard", set: "sv01" },
  "paldea-evolved-fun-pack":     { fileGroup: "fun-pack", variantId: "standard", set: "sv02" },
  "paradox-rift-fun-pack":       { fileGroup: "fun-pack", variantId: "standard", set: "sv04" },
  "temporal-forces-fun-pack":    { fileGroup: "fun-pack", variantId: "standard", set: "sv05" },
};

// Packaging type overrides for products whose category field is wrong
const MANUAL_PACKAGING_TYPE = {
  "paldean-fates-booster-bundle-display-case": "display-case",
};

// Booster pack artwork variants per set — used to expand booster-pack products into per-artwork variants.
// IDs follow the anticipated TCGDex format: boo_{setId}-{slug}
const PACK_ARTWORKS = {
  me01:    ["gardevoir", "kangaskhan", "lucario", "venusaur"],
  me02:    ["charizard", "gengar", "heracross", "lopunny"],
  "me02.5": ["charizard", "dragonite", "ho-oh", "lucario", "mewtwo", "pikachu"],
  me03:    ["clefable", "meowth", "starmie", "zygarde"],
  me04:    ["dragalge", "floette", "greninja", "pyroar"],
  me05:    ["chandelure", "darkrai", "excadrill", "zeraora"],
  sv01:    ["koraidon", "miraidon", "gyarados", "starters"],
  sv02:    ["meowscarada", "skeledirge", "quaquaval", "chien-pao", "ting-lu"],
  sv03:    ["charizard", "tyranitar", "dragonite", "revavroom"],
  "sv03.5": ["charizard", "venusaur", "blastoise", "mew"],
  sv04:    ["armarouge", "garchomp", "iron-valiant", "roaring-moon"],
  "sv04.5": ["pikachu", "tinkaton", "ceruledge", "dondozo"],
  sv05:    ["iron-crown", "iron-leaves", "raging-bolt", "walking-wake"],
};

// Pokémon whose official names contain hyphens — slug capitalisation would lose them
const SLUG_NAME_OVERRIDES = {
  "ho-oh":     "Ho-Oh",
  "chien-pao": "Chien-Pao",
  "ting-lu":   "Ting-Lu",
  "chi-yu":    "Chi-Yu",
  "wo-chien":  "Wo-Chien",
};

function slugToName(slug) {
  if (SLUG_NAME_OVERRIDES[slug]) return SLUG_NAME_OVERRIDES[slug];
  return slug.split("-").map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

// ── Helpers ───────────────────────────────────────────────────────────────────

function readJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function getProductSet(product, byId, visited = new Set()) {
  if (visited.has(product.id)) return null;
  visited.add(product.id);
  const booster = (product.contents || []).find(c => c.set);
  if (booster?.set) return booster.set;
  const child = (product.contents || []).find(c => c.type === "sealed-product");
  if (child?.product && byId[child.product]) {
    return getProductSet(byId[child.product], byId, visited);
  }
  return null;
}

function stripSetPrefix(slug, set) {
  for (const prefix of SET_PREFIXES[set] || []) {
    if (slug.startsWith(prefix)) return slug.slice(prefix.length);
  }
  return slug;
}

function deriveVariantId(productId, set, fileGroup, isPcEtb) {
  let slug = stripSetPrefix(productId, set);

  if (isPcEtb) {
    const pcPrefix = "pokemon-center-elite-trainer-box";
    if (slug.startsWith(pcPrefix + "-")) slug = slug.slice(pcPrefix.length + 1) + "-pc";
    else if (slug === pcPrefix) slug = "pc";
    return slug;
  }

  const catPrefix = fileGroup + "-";
  if (slug.startsWith(catPrefix)) slug = slug.slice(catPrefix.length);
  else if (slug === fileGroup) slug = "";

  return slug || "standard";
}

function derivePackagingId(productId, set, fileGroup, packagingType) {
  let slug = stripSetPrefix(productId, set);

  // Strip the packaging type suffix (longest match first)
  for (const suf of ["-display-case", "-display", "-case"]) {
    if (slug.endsWith(suf)) { slug = slug.slice(0, -suf.length); break; }
  }

  // Strip the file group from the end
  const fgSuf = "-" + fileGroup;
  if (slug.endsWith(fgSuf)) slug = slug.slice(0, -fgSuf.length);
  else if (slug === fileGroup) slug = "";

  return slug ? `${slug}-${packagingType}` : packagingType;
}

// ── Content normalizers ───────────────────────────────────────────────────────

function normalizeBooster(c) {
  if (c.type !== "booster") return c;
  return { type: "booster", set: c.set, packs: [{ quantity: c.quantity }] };
}

function normalizePromo(c) {
  if (c.type !== "promo-card") return c;
  const cards = c.possibleCards ?? c.cards ?? (c.card ? [c.card] : []);
  const out = { type: "promo-card", cards };
  if (c.stamp) out.stamp = c.stamp;
  return out;
}

// ── Content helpers ───────────────────────────────────────────────────────────

function sortKeys(obj) {
  if (Array.isArray(obj)) return obj.map(sortKeys);
  if (obj && typeof obj === "object") {
    return Object.fromEntries(Object.keys(obj).sort().map(k => [k, sortKeys(obj[k])]));
  }
  return obj;
}

function contentKey(c) {
  return JSON.stringify(sortKeys(c));
}

function computeBase(variantProducts) {
  if (variantProducts.length <= 1) return null;

  const allKeySets = variantProducts.map(p => new Set((p.contents || []).map(contentKey)));
  const shared = new Set(allKeySets[0]);
  for (let i = 1; i < allKeySets.length; i++) {
    for (const k of shared) {
      if (!allKeySets[i].has(k)) shared.delete(k);
    }
  }
  if (shared.size === 0) return null;

  return (variantProducts[0].contents || []).filter(c => shared.has(contentKey(c)));
}

function deltaContents(product, base) {
  if (!base?.length) return product.contents || [];
  const baseKeys = new Set(base.map(contentKey));
  return (product.contents || []).filter(c => !baseKeys.has(contentKey(c)));
}

function withArtworks(booster) {
  const artworks = PACK_ARTWORKS[booster.set];
  if (!artworks) return booster;
  return { ...booster, artworks: artworks.map(art => `boo_${booster.set}-${art}`) };
}

/** Split a content array into top-level boosters/accessories and remaining variant contents. */
function splitTopLevel(contents) {
  const boosters = [];
  const accessories = [];
  const remaining = [];
  for (const c of contents) {
    if (c.type === "booster") {
      boosters.push({ set: c.set, packs: c.packs });
    } else if (c.type === "accessory") {
      const acc = { category: c.category, quantity: c.quantity };
      if (c.name) acc.name = c.name;
      accessories.push(acc);
    } else {
      remaining.push(c);
    }
  }
  return { boosters, accessories, remaining };
}

// ── TypeScript serializer ─────────────────────────────────────────────────────

function serialize(value, indent = 0) {
  const pad   = "  ".repeat(indent);
  const inner = "  ".repeat(indent + 1);

  if (value === null || value === undefined) return "null";
  if (typeof value === "string")  return JSON.stringify(value);
  if (typeof value === "number" || typeof value === "boolean") return String(value);

  if (Array.isArray(value)) {
    if (value.length === 0) return "[]";
    return `[\n${value.map(v => inner + serialize(v, indent + 1)).join(",\n")},\n${pad}]`;
  }

  const entries = Object.entries(value).filter(
    ([, v]) => v !== undefined && v !== null
  );
  if (entries.length === 0) return "{}";
  return `{\n${entries.map(([k, v]) => `${inner}${k}: ${serialize(v, indent + 1)}`).join(",\n")},\n${pad}}`;
}

// ── Main ──────────────────────────────────────────────────────────────────────

function main() {
  const files = fs.readdirSync(PRODUCTS_DIR).filter(f => f.endsWith(".json"));
  const allProducts = files.map(f => {
    const p = readJson(path.join(PRODUCTS_DIR, f));
    if (p.contents) p.contents = p.contents.map(c => normalizeBooster(normalizePromo(c)));
    return p;
  });
  const byId = Object.fromEntries(allProducts.map(p => [p.id, p]));

  // ── Pass 1: classify variant products ─────────────────────────────────────
  const variantMeta = new Map(); // id → { set, era, fileGroup, variantId }

  for (const product of allProducts) {
    const { id, category } = product;
    if (category === "case" || category === "display") continue;

    const manual = MANUAL_GROUPS[id];
    const isPcEtb = category === "pokemon-center-elite-trainer-box";

    const set = manual?.set ?? getProductSet(product, byId);
    if (!set) { console.warn(`  WARN no set: ${id}`); continue; }

    const era = ERA_MAP[set];
    if (!era) { console.warn(`  WARN no era for set=${set}: ${id}`); continue; }

    const fileGroup = manual?.fileGroup ?? (isPcEtb ? "elite-trainer-box" : category);
    const variantId = manual?.variantId ?? deriveVariantId(id, set, fileGroup, isPcEtb);

    variantMeta.set(id, { set, era, fileGroup, variantId });
  }

  // ── Pass 2: classify packaging (cases / displays) ─────────────────────────
  const packagingItems = [];

  for (const product of allProducts) {
    const { id, category } = product;
    if (category !== "case" && category !== "display") continue;

    const childRefs = (product.contents || []).filter(c => c.type === "sealed-product");
    if (!childRefs.length) { console.warn(`  WARN no children: ${id}`); continue; }

    // Determine packaging type
    const hasDisplayChild = childRefs.some(r => byId[r.product]?.category === "display");
    const packagingType =
      MANUAL_PACKAGING_TYPE[id] ??
      (hasDisplayChild ? "display-case" : category === "display" ? "display" : "case");

    // Find parent by tracing children (and their children for display-cases)
    let parentMeta = null;
    for (const ref of childRefs) {
      parentMeta = variantMeta.get(ref.product);
      if (parentMeta) break;
      const child = byId[ref.product];
      if (child) {
        for (const sub of (child.contents || []).filter(c => c.type === "sealed-product")) {
          parentMeta = variantMeta.get(sub.product);
          if (parentMeta) break;
        }
      }
      if (parentMeta) break;
    }

    if (!parentMeta) { console.warn(`  WARN no parent: ${id}`); continue; }

    packagingItems.push({
      product, packagingType,
      parentSet: parentMeta.set, parentEra: parentMeta.era, parentFileGroup: parentMeta.fileGroup,
    });
  }

  // ── Build groups ───────────────────────────────────────────────────────────
  const groups = new Map();

  for (const [id, meta] of variantMeta) {
    const key = `${meta.era}/${meta.set}/${meta.fileGroup}`;
    if (!groups.has(key)) groups.set(key, { ...meta, variants: [], packaging: [] });
    groups.get(key).variants.push({ id, variantId: meta.variantId, product: byId[id] });
  }

  for (const item of packagingItems) {
    const key = `${item.parentEra}/${item.parentSet}/${item.parentFileGroup}`;
    if (!groups.has(key)) { console.warn(`  WARN no group "${key}" for ${item.product.id}`); continue; }
    groups.get(key).packaging.push(item);
  }

  // ── Generate files ─────────────────────────────────────────────────────────
  let fileCount = 0;

  for (const [, group] of groups) {
    const { era, set, fileGroup, variants, packaging } = group;

    variants.sort((a, b) => {
      const d = (a.product.releaseDate ?? "").localeCompare(b.product.releaseDate ?? "");
      return d !== 0 ? d : a.product.name.localeCompare(b.product.name);
    });

    // Use the non-PC-ETB category as the file-level category
    const category =
      variants.find(v => v.product.category !== "pokemon-center-elite-trainer-box")?.product.category
      ?? fileGroup;

    const variantProducts = variants.map(v => v.product);
    const base = computeBase(variantProducts);

    // Split shared base contents into boosters/accessories (top-level) and promo-cards etc (per-variant)
    const { boosters: baseBooters, accessories: baseAccs, remaining: baseRemaining } =
      splitTopLevel(base ?? []);

    // For multi-variant: if base had no boosters, use the first variant's booster as the
    // top-level default so that only outlier variants need an override.
    let defaultBoosterKey = null;
    let topBoosters = baseBooters;
    if (!baseBooters.length && variants.length > 1) {
      const firstDelta = deltaContents(variants[0].product, base);
      const { boosters: firstBooters } = splitTopLevel(firstDelta);
      if (firstBooters.length) {
        topBoosters = firstBooters;
        defaultBoosterKey = JSON.stringify(firstBooters.map(sortKeys));
      }
    }

    let output = { category, set };
    if (topBoosters.length) output.boosters = topBoosters.map(withArtworks);
    if (baseAccs.length) output.accessories = baseAccs;

    output.variants = variants.map(({ variantId, product }) => {
      const v = { id: variantId, name: product.name };
      if (product.releaseDate) v.releaseDate = product.releaseDate;
      if (product.identifiers && Object.keys(product.identifiers).length) v.thirdParty = product.identifiers;
      if (product.images?.length) v.images = product.images;

      const rawDelta = deltaContents(product, base);
      const { boosters: deltaBoosters, accessories: deltaAccs, remaining } = splitTopLevel(rawDelta);

      if (variants.length === 1) {
        // Single-variant: hoist everything to top level
        if (deltaBoosters.length) output.boosters = (output.boosters || []).concat(deltaBoosters.map(withArtworks));
        if (deltaAccs.length) output.accessories = (output.accessories || []).concat(deltaAccs);
        const variantContents = [...baseRemaining, ...remaining];
        if (variantContents.length) v.contents = variantContents;
      } else {
        // Multi-variant: boosters/accessories go to variant override unless they match the default
        const thisBoosterKey = JSON.stringify(deltaBoosters.map(sortKeys));
        if (deltaBoosters.length && thisBoosterKey !== defaultBoosterKey) {
          v.boosters = deltaBoosters.map(withArtworks);
        }
        if (deltaAccs.length) v.accessories = deltaAccs;
        const variantContents = [...baseRemaining, ...remaining];
        if (variantContents.length) v.contents = variantContents;
      }

      if (product.description) v.description = product.description;
      if (product.sources?.length) v.sources = product.sources;
      return v;
    });

    // For booster-pack products with known pack artworks, lift shared metadata to the top level
    // and drop variants entirely — the media array is the variant list.
    const packArtworks = PACK_ARTWORKS[set];
    if (fileGroup === "booster-pack" && packArtworks && output.variants.length === 1) {
      const { id: _id, contents: _c, images: _img, ...meta } = output.variants[0];
      output = {
        category,
        set,
        ...meta,
        logo: "",
        media: packArtworks.map(art => ({
          id: `boo_${set}-${art}`,
          name: slugToName(art),
          dexId: [],
          artworkFront: "",
        })),
      };
    }

    if (packaging.length) {
      const typeOrder = { display: 0, case: 1, "display-case": 2 };
      packaging.sort((a, b) => (typeOrder[a.packagingType] ?? 0) - (typeOrder[b.packagingType] ?? 0));

      output.packaging = packaging.map(({ product, packagingType }) => {
        const pid = derivePackagingId(product.id, set, fileGroup, packagingType);
        const entry = { type: packagingType, id: pid, name: product.name };
        if (product.identifiers && Object.keys(product.identifiers).length) entry.thirdParty = product.identifiers;
        if (product.releaseDate) entry.releaseDate = product.releaseDate;

        entry.contents = (product.contents || [])
          .filter(c => c.type === "sealed-product")
          .map(ref => {
            const childMeta = variantMeta.get(ref.product);
            if (childMeta) {
              return { type: "variant", id: childMeta.variantId, quantity: ref.quantity };
            }
            // Child is itself a display product
            const childProduct = byId[ref.product];
            if (childProduct?.category === "display") {
              const displayPid = derivePackagingId(ref.product, set, fileGroup, "display");
              return { type: "packaging", id: displayPid, quantity: ref.quantity };
            }
            // Fallback — should not happen with clean data
            console.warn(`  WARN unresolved child "${ref.product}" in packaging of ${product.id}`);
            return { type: "variant", id: ref.product, quantity: ref.quantity };
          });

        return entry;
      });
    }

    const tsContent =
      `import type { SealedProductDef } from "../../../../types/sealed";\n\n` +
      `export default ${serialize(output, 0)} satisfies SealedProductDef;\n`;

    const outDir = path.join(SEALED_DIR, era, set);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, `${fileGroup}.ts`), tsContent, "utf8");

    console.log(`${era}/${set}/${fileGroup}.ts  (${variants.length}v + ${packaging.length}p)`);
    fileCount++;
  }

  console.log(`\nGenerated ${fileCount} files in data/sealed/`);
}

main();
