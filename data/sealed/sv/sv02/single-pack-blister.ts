import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv02",
  boosters: [
    {
      set: "sv02",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv02-meowscarada",
        "boo_sv02-skeledirge",
        "boo_sv02-quaquaval",
        "boo_sv02-chien-pao",
        "boo_sv02-ting-lu",
      ],
    },
  ],
  variants: [
    {
      id: "armarouge",
      name: "Paldea Evolved Single Pack Blister [Armarouge]",
      releaseDate: "2023-06-09",
      thirdParty: {
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
          cards: [
            "sv01-039",
            "sv01-041",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
    {
      id: "dondonzo",
      name: "Paldea Evolved Single Pack Blister [Dondonzo]",
      releaseDate: "2023-06-09",
      thirdParty: {
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
          cards: [
            "sv01-061",
            "sv01-062",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
    {
      id: "growlithe",
      name: "Paldea Evolved Single Pack Blister [Growlithe]",
      releaseDate: "2023-06-09",
      thirdParty: {
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
          cards: [
            "svp-024",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 1 promo card.",
    },
    {
      id: "smoliv",
      name: "Paldea Evolved Single Pack Blister [Smoliv]",
      releaseDate: "2023-06-09",
      thirdParty: {
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
          cards: [
            "svp-023",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 1 promo card.",
    },
  ],
} satisfies SealedProductDef;
