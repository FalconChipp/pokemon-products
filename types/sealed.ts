export interface BoosterPack {
  pack?: string; // specific pack variant ID (e.g. "me01-lucario"); omit for generic/random
  quantity: number;
}

export interface BoosterContent {
  type: "booster";
  set: string; // TCGDex set ID (e.g. "sv03.5", "me01")
  packs: BoosterPack[];
}

export interface PromoCardContent {
  type: "promo-card";
  /**
   * TCGDex card IDs of every promo included.
   * For products where one card is chosen from a set (e.g. Build & Battle Boxes),
   * list all candidates — the card is product-specific, not random.
   */
  cards: string[];
  /** TCGDex stamp terminology: "cosmos", "pokemon-center", "set-logo", "jumbo", "lenticular". */
  stamp?: string;
}

export interface AccessoryContent {
  type: "accessory";
  /** e.g. "sleeves", "coin", "damage-counter-dice", "energy-card", "divider". */
  category: string;
  quantity: number;
  /** Disambiguates when variants differ by accessory art, e.g. "Mega Gardevoir" sleeves. */
  name?: string;
}

export type VariantContent = BoosterContent | PromoCardContent | AccessoryContent;

/** Reference to a variant in this file's `variants` array. */
export interface VariantRef {
  type: "variant";
  /** `id` of the target variant. */
  id: string;
  quantity: number;
}

/** Reference to another packaging entry in this file's `packaging` array. */
export interface PackagingRef {
  type: "packaging";
  /** `id` of the target packaging unit. */
  id: string;
  quantity: number;
}

export type PackagingContent = VariantRef | PackagingRef;

export interface ProductImage {
  type: "front" | "back";
  url: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  releaseDate?: string;
  thirdParty?: Record<string, string>;
  images?: ProductImage[];
  /** Overrides the product-level `boosters` for this variant. */
  boosters?: SealedBooster[];
  /** Overrides the product-level `accessories` for this variant. */
  accessories?: SealedAccessory[];
  contents?: VariantContent[];
  description?: string;
  sources?: string[];
}

/** Booster entry for the top-level `boosters` field — `type` is implied. */
export interface SealedBooster {
  set: string;
  packs: BoosterPack[];
  /** Available pack artwork IDs for this set (boo_{set}-{slug}). */
  artworks?: string[];
}

/** Accessory entry for the top-level `accessories` field — `type` is implied. */
export interface SealedAccessory {
  category: string;
  quantity: number;
  name?: string;
}

export interface PackagingUnit {
  /**
   * "display" = retail display box of individual variants.
   * "case" = shipping case of individual variants or displays.
   * "display-case" = case whose direct children are displays.
   */
  type: "case" | "display" | "display-case";
  /**
   * Slug identifying this unit within the file. Usually just the type ("case", "display")
   * unless multiple of the same type exist (e.g. "alakazam-case", "zapdos-case").
   */
  id: string;
  name: string;
  thirdParty?: Record<string, string>;
  releaseDate?: string;
  contents: PackagingContent[];
}

export interface PackMedia {
  id: string; // TCGDex boo_{set}-{slug} format
  name: string;
  dexId?: number[];
  artworkFront?: string;
}

export interface SealedProductDef {
  category: string;
  set: string;
  name?: string;
  releaseDate?: string;
  thirdParty?: Record<string, string>;
  description?: string;
  sources?: string[];
  logo?: string;
  /** Pack artwork variants. Only present on booster-pack products. */
  media?: PackMedia[];
  /** Booster packs shared across all variants. */
  boosters?: SealedBooster[];
  /** Accessories shared across all variants. */
  accessories?: SealedAccessory[];
  variants?: ProductVariant[];
  packaging?: PackagingUnit[];
}
