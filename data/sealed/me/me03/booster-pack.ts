import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "me03",
  variants: [
    {
      id: "standard",
      name: "Perfect Order Booster Pack",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672398",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672398_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me03",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
