import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Booster Pack",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501256",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501256_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
