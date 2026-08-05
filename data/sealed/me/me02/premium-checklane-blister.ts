import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "me02",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "coin",
        quantity: 1,
        name: "Diancie",
        details: {
          size: "big",
        },
      },
    ],
  },
  variants: [
    {
      id: "arvens-greedent",
      name: "Phantasmal Flames Premium Checklane Blister [Arven's Greedent]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "668931",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668931_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "sv10-158",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv10-159",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "blaziken",
      name: "Phantasmal Flames Premium Checklane Blister [Blaziken]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654147",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654147_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv10-040",
            "sv10-041",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv10-042",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "ethans-magcargo",
      name: "Phantasmal Flames Premium Checklane Blister [Ethan's Magcargo]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "672588",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672588_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "sv10-035",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv10-036",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "hydrapple",
      name: "Phantasmal Flames Premium Checklane Blister [Hydrapple]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654146",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654146_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv10-016",
            "sv10-017",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv10-018",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
