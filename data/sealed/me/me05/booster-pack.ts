import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "me05",
  variants: [
    {
      id: "standard",
      name: "Pitch Black Booster Pack",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692944",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692944_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
