import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv01",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv01",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "gengar",
      name: "Scarlet & Violet Premium Checklane Blister [Gengar]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "479328",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/479328_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "swsh11-064",
            "swsh11-065",
            "swsh11-066",
          ],
          quantity: 3,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "hisuian-arcanine",
      name: "Scarlet & Violet Premium Checklane Blister [Hisuian Arcanine]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "497166",
      },
      contents: [
        {
          type: "promo-card",
          cards: [
            "swsh11-083",
            "swsh11-84",
          ],
          quantity: 2,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 2 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "hisuian-zoroark",
      name: "Scarlet & Violet Premium Checklane Blister [Hisuian Zoroark]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "497167",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/497167_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "swsh11-075",
            "swsh11-076",
          ],
          quantity: 2,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
    {
      id: "machamp",
      name: "Scarlet & Violet Premium Checklane Blister [Machamp]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "479330",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/479330_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "swsh11-086",
            "swsh11-087",
            "swsh11-088",
          ],
          quantity: 3,
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack and 1 promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
