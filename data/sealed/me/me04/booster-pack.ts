import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "me04",
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Booster Pack",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684446",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684446_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me04",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
