import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "sv03.5",
  variants: [
    {
      id: "standard",
      name: "151 Booster Pack",
      releaseDate: "2023-09-22",
      identifiers: {
        tcgplayer: "504467",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/504467_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
