import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv04",
  boosters: [
    {
      set: "sv04",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv04-armarouge",
        "boo_sv04-garchomp",
        "boo_sv04-iron-valiant",
        "boo_sv04-roaring-moon",
      ],
    },
  ],
  variants: [
    {
      id: "ceruledge",
      name: "Paradox Rift Single Pack Blister [Ceruledge]",
      releaseDate: "2023-11-03",
      thirdParty: {
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
          cards: [
            "sv02-039",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv02-098",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
    {
      id: "glimmora",
      name: "Paradox Rift Single Pack Blister [Glimmora]",
      releaseDate: "2023-11-03",
      thirdParty: {
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
          cards: [
            "sv02-124",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv02-126",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 2 promo cards, and a coin.",
    },
    {
      id: "pineco",
      name: "Paradox Rift Single Pack Blister [Pineco]",
      releaseDate: "2023-11-03",
      thirdParty: {
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
          cards: [
            "svp-061",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "sinistea",
      name: "Paradox Rift Single Pack Blister [Sinistea]",
      releaseDate: "2023-11-03",
      thirdParty: {
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
          cards: [
            "svp-062",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
  ],
} satisfies SealedProductDef;
