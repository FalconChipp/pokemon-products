import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv03.5",
  variants: [
    {
      id: "standard",
      name: "151 Booster Bundle",
      releaseDate: "2023-09-22",
      identifiers: {
        tcgplayer: "502000",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502000_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "151 Booster Bundle Display",
      identifiers: {
        tcgplayer: "513405",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 10,
        },
      ],
    },
    {
      type: "case",
      id: "case",
      name: "151 Booster Bundle Case",
      identifiers: {
        tcgplayer: "530105",
      },
      releaseDate: "2023-09-22",
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
