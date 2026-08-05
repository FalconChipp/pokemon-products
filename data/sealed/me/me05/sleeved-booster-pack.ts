import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me05",
  variants: [
    {
      id: "standard",
      name: "Pitch Black Sleeved Booster Pack",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692957",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692957_in_1000x1000.jpg",
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
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Pitch Black Sleeved Booster Case",
      identifiers: {
        tcgplayer: "692956",
      },
      releaseDate: "2026-07-17",
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
