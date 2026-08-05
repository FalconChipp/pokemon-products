import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Sleeved Booster Pack",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478273",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478273_in_1000x1000.jpg",
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
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Scarlet & Violet Sleeved Booster Case",
      identifiers: {
        tcgplayer: "600076",
      },
      releaseDate: "2023-03-21",
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
