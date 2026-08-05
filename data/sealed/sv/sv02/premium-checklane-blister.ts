import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
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
      id: "arboliva",
      name: "Paldea Evolved Premium Checklane Blister [Arboliva]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "622968",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/622968_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-020",
            "sv01-022",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv01-023",
          quantity: 1,
          stamp: "vertical-line-holo",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "pawmot",
      name: "Paldea Evolved Premium Checklane Blister [Pawmot]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "622967",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/622967_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-073",
            "sv01-075",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv01-076",
          quantity: 1,
          stamp: "vertical-line-holo",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
