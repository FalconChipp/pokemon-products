import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
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
      id: "espathra",
      name: "Scarlet & Violet Single Pack Blister [Espathra]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478766",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478766_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-010",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 1 promo card.",
      status: "draft",
    },
    {
      id: "spidops",
      name: "Scarlet & Violet Single Pack Blister [Spidops]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478765",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478765_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-009",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
