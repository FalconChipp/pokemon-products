import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Booster Pack",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "476451",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/476451_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
