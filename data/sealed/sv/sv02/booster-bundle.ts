import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Booster Bundle",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "496914",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/496914_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv02",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Paldea Evolved Booster Bundle Case",
      identifiers: {
        tcgplayer: "656928",
      },
      releaseDate: "2023-06-09",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 25,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
