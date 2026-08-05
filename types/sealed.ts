export interface BoosterContent {
  type: "booster";
  set: string;
  quantity: number;
}

export interface PromoCardContent {
  type: "promo-card";
  card?: string;
  cards?: string[];
  possibleCards?: string[];
  quantity: number;
  stamp?: string;
  selection?: string;
}

export interface AccessoryContent {
  type: "accessory";
  name: string;
  quantity: number;
}

export type VariantContent = BoosterContent | PromoCardContent | AccessoryContent;

export interface VariantRef {
  type: "sealed-product";
  variant: string;
  quantity: number;
}

export interface PackagingRef {
  type: "sealed-product";
  packaging: string;
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
  identifiers?: Record<string, string>;
  images?: ProductImage[];
  contents?: VariantContent[];
  description?: string;
  sources?: string[];
  status?: "draft" | "verified";
}

export interface BaseProduct {
  contents: VariantContent[];
}

export interface PackagingUnit {
  type: "case" | "display" | "display-case";
  id: string;
  name: string;
  identifiers?: Record<string, string>;
  releaseDate?: string;
  contents: PackagingContent[];
}

export interface SealedProductDef {
  category: string;
  set: string;
  base?: BaseProduct;
  variants: ProductVariant[];
  packaging?: PackagingUnit[];
}
