import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me01-gardevoir",
        "boo_me01-kangaskhan",
        "boo_me01-lucario",
        "boo_me01-venusaur",
      ],
    },
  ],
  accessories: [
    {
      category: "coin",
      quantity: 1,
      name: "Lucario",
    },
  ],
  variants: [
    {
      id: "meowscarada",
      name: "Mega Evolution Premium Checklane Blister [Meowscarada]",
      releaseDate: "2025-09-26",
      thirdParty: {
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
        },
        {
          type: "promo-card",
          cards: [
            "sv09-018",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
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
        },
        {
          type: "promo-card",
          cards: [
            "sv09-095",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo card(s), and a coin.",
    },
  ],
} satisfies SealedProductDef;
