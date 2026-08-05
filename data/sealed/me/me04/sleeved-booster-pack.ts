import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me04",
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Sleeved Booster Pack",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684448",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684448_in_1000x1000.jpg",
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
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Chaos Rising Sleeved Booster Case",
      identifiers: {
        tcgplayer: "690684",
      },
      releaseDate: "2026-05-22",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 144,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
