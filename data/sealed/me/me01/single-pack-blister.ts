import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
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
      id: "drifblim",
      name: "Mega Evolution Single Pack Blister [Drifblim]",
      releaseDate: "2025-09-26",
      identifiers: {
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
          card: "mep-006",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "drifloon",
      name: "Mega Evolution Single Pack Blister [Drifloon]",
      releaseDate: "2025-09-26",
      identifiers: {
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
          card: "mep-005",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "lycanroc",
      name: "Mega Evolution Single Pack Blister [Lycanroc]",
      releaseDate: "2025-09-26",
      identifiers: {
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
          card: "sv09-084",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv09-085",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "wailord",
      name: "Mega Evolution Single Pack Blister [Wailord]",
      releaseDate: "2025-09-26",
      identifiers: {
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
          card: "sv09-040",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv09-041",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
