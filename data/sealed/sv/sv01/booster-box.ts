import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Booster Box",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "476452",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/476452_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 36,
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Scarlet & Violet Booster Box Case",
      identifiers: {
        tcgplayer: "476453",
      },
      releaseDate: "2023-03-21",
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
