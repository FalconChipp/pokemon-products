import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv02",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv02",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "armarouge",
      name: "Paldea Evolved Single Pack Blister [Armarouge]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "618829",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/618829_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          possibleCards: [
            "sv01-039",
            "sv01-041",
          ],
          selection: "one-of",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "dondonzo",
      name: "Paldea Evolved Single Pack Blister [Dondonzo]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "617015",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/617015_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          possibleCards: [
            "sv01-061",
            "sv01-062",
          ],
          selection: "one-of",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "growlithe",
      name: "Paldea Evolved Single Pack Blister [Growlithe]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "494001",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/494001_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-024",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 1 promo card.",
      status: "draft",
    },
    {
      id: "smoliv",
      name: "Paldea Evolved Single Pack Blister [Smoliv]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "493999",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493999_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-023",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 1 promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
