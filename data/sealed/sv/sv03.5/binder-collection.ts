import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "binder-collection",
  set: "sv03.5",
  variants: [
    {
      id: "standard",
      name: "151 Binder Collection",
      releaseDate: "2023-09-22",
      identifiers: {
        tcgplayer: "502004",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502004_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 4,
        },
      ],
      description: "Each 151 Binder Collection contains 4 Booster Packs and a binder with 20 9-pocket pages.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "151 Binder Collection Case",
      identifiers: {
        tcgplayer: "502003",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
