import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "me05",
  base: {
    contents: [
      {
        type: "booster",
        set: "me05",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "amaura-aurorus",
      name: "Pitch Black Premium Checklane Blister [Amaura, Aurorus]",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692954",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692954_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me03-023",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "me03-024",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "gengar-line",
      name: "Pitch Black Premium Checklane Blister [Gengar Line]",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692951",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692951_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me03-048",
            "me03-049",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "me03-050",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "luxray-line",
      name: "Pitch Black Premium Checklane Blister [Luxray Line]",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692952",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692952_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me03-026",
            "me03-027",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "me03-028",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "tyrunt-tyrantrum",
      name: "Pitch Black Premium Checklane Blister [Tyrunt, Tyrantrum]",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692953",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692953_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me03-044",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "me03-045",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
