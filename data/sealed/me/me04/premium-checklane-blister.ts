import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "me04",
  base: {
    contents: [
      {
        type: "booster",
        set: "me04",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "flygon-line",
      name: "Chaos Rising Premium Checklane Blister [Flygon Line]",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684460",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684460_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02-051",
            "me02-052",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "me02-053",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "pawmot-line",
      name: "Chaos Rising Premium Checklane Blister [Pawmot Line]",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684459",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684459_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02-032",
            "me02-033",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "me02-034",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
