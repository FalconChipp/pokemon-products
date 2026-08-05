import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv04",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv04",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "hydreigon",
      name: "Paradox Rift Premium Checklane Blister [Hydreigon]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "546605",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/546605_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv02-138",
            "sv02-139",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv02-140",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "tinkaton",
      name: "Paradox Rift Premium Checklane Blister [Tinkaton]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "546606",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/546606_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv02-102",
            "sv02-104",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv02-105",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
