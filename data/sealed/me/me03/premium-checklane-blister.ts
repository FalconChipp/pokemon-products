import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "me03",
  base: {
    contents: [
      {
        type: "booster",
        set: "me03",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "cinderace-line",
      name: "Perfect Order Premium Checklane Blister [Cinderace Line]",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672407",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672407_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me01-026",
            "me01-027",
            "me01-028",
          ],
          quantity: 3,
        },
        {
          type: "accessory",
          category: "coin",
          quantity: 1,
          details: {
            size: "big",
          },
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "clawitzer-line",
      name: "Perfect Order Premium Checklane Blister [Clawitzer Line]",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672409",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672409_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me01-037",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "me01-038",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "meganium-line",
      name: "Perfect Order Premium Checklane Blister [Meganium Line]",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672406",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672406_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me01-008",
            "me01-009",
            "me01-010",
          ],
          quantity: 3,
        },
        {
          type: "accessory",
          category: "coin",
          quantity: 1,
          details: {
            size: "big",
          },
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "steelix-line",
      name: "Perfect Order Premium Checklane Blister [Steelix Line]",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672408",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672408_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me01-070",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "me01-093",
          quantity: 1,
          stamp: "cosmos",
        },
        {
          type: "accessory",
          category: "coin",
          quantity: 1,
          details: {
            size: "big",
          },
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
