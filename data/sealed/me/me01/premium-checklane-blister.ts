import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "me01",
  base: {
    contents: [
      {
        type: "booster",
        set: "me01",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "coin",
        quantity: 1,
        name: "Lucario",
      },
    ],
  },
  variants: [
    {
      id: "meowscarada",
      name: "Mega Evolution Premium Checklane Blister [Meowscarada]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644361",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644361_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv09-016",
            "sv09-017",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv09-018",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
    {
      id: "tyranitar",
      name: "Mega Evolution Premium Checklane Blister [Tyranitar]",
      releaseDate: "2025-09-26",
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644361_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv09-080",
            "sv09-081",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv09-095",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
