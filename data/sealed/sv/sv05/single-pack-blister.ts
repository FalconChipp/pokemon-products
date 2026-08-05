import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv05",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv05",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "bellibolt",
      name: "Temporal Forces Single Pack Blister [Bellibolt]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "536594",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536594_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-094",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "carvanha",
      name: "Temporal Forces Single Pack Blister [Carvanha]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "536284",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536284_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-093",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "palafin",
      name: "Temporal Forces Single Pack Blister [Palafin]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "617012",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/617012_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "sv03-060",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv03-062",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "scovillain",
      name: "Temporal Forces Single Pack Blister [Scovillain]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "617011",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/617011_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "sv03-024",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv03-025",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
