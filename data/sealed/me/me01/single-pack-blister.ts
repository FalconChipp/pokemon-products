import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
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
      id: "drifblim",
      name: "Mega Evolution Single Pack Blister [Drifblim]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644359",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644359_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-006",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "drifloon",
      name: "Mega Evolution Single Pack Blister [Drifloon]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644358",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644358_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-005",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "lycanroc",
      name: "Mega Evolution Single Pack Blister [Lycanroc]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "657490",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/657490_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv09-084",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv09-085",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
    {
      id: "wailord",
      name: "Mega Evolution Single Pack Blister [Wailord]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "657489",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/657489_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv09-040",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv09-041",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
  ],
} satisfies SealedProductDef;
