import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv03",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv03",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "annihilape",
      name: "Obsidian Flames Premium Checklane Blister [Annihilape]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "557084",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/557084_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-107",
            "sv01-108",
            "sv01-109",
          ],
          quantity: 3,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "kingambit",
      name: "Obsidian Flames Premium Checklane Blister [Kingambit]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "557085",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/557085_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-132",
            "sv01-133",
            "sv01-134",
          ],
          quantity: 3,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "revavroom",
      name: "Obsidian Flames Premium Checklane Blister [Revavroom]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "557087",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/557087_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-141",
            "sv01-142",
          ],
          quantity: 2,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "houndstone",
      name: "Obsidian Flames Premium Checklane Blister [Houndstone]",
      releaseDate: "2023-09-11",
      identifiers: {
        tcgplayer: "557086",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/557086_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-104",
            "sv01-106",
          ],
          quantity: 2,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
