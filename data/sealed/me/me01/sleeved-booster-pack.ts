import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me01",
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Sleeved Booster Pack",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644354",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644354_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
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
      name: "Mega Evolution Sleeved Booster Case",
      identifiers: {
        tcgplayer: "650766",
      },
      releaseDate: "2025-09-26",
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
