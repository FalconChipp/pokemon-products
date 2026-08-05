import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv04",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv04",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "ceruledge",
      name: "Paradox Rift Single Pack Blister [Ceruledge]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "625582",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/625582_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "sv02-039",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv02-098",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "glimmora",
      name: "Paradox Rift Single Pack Blister [Glimmora]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "625581",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/625581_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "sv02-124",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "sv02-126",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "pineco",
      name: "Paradox Rift Single Pack Blister [Pineco]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "514224",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/514224_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-061",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "sinistea",
      name: "Paradox Rift Single Pack Blister [Sinistea]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "514223",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/514223_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-062",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
