import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me03",
  variants: [
    {
      id: "standard",
      name: "Perfect Order Sleeved Booster Pack",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672412",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672412_in_1000x1000.jpg",
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
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Perfect Order Sleeved Booster Case",
      identifiers: {
        tcgplayer: "672411",
      },
      releaseDate: "2026-03-27",
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
