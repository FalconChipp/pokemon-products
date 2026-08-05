import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "sv05",
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Sleeved Booster Pack",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "538787",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/538787_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
