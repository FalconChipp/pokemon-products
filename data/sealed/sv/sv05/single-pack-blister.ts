import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv05-iron-crown",
        "boo_sv05-iron-leaves",
        "boo_sv05-raging-bolt",
        "boo_sv05-walking-wake",
      ],
    },
  ],
  variants: [
    {
      id: "bellibolt",
      name: "Temporal Forces Single Pack Blister [Bellibolt]",
      releaseDate: "2024-03-22",
      thirdParty: {
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
          cards: [
            "svp-094",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "carvanha",
      name: "Temporal Forces Single Pack Blister [Carvanha]",
      releaseDate: "2024-03-22",
      thirdParty: {
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
          cards: [
            "svp-093",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "palafin",
      name: "Temporal Forces Single Pack Blister [Palafin]",
      releaseDate: "2024-03-22",
      thirdParty: {
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
          cards: [
            "sv03-060",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv03-062",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo card, and a coin.",
    },
    {
      id: "scovillain",
      name: "Temporal Forces Single Pack Blister [Scovillain]",
      releaseDate: "2024-03-22",
      thirdParty: {
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
          cards: [
            "sv03-024",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv03-025",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
  ],
} satisfies SealedProductDef;
