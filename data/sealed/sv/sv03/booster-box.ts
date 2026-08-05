import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Booster Box",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501257",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501257_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
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
      name: "Obsidian Flames Booster Box Case",
      identifiers: {
        tcgplayer: "501258",
      },
      releaseDate: "2023-08-11",
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
