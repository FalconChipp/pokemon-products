import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
  set: "me02.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02.5",
        quantity: 2,
      },
    ],
  },
  variants: [
    {
      id: "erika",
      name: "Ascended Heroes Collection [Erika]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "666906",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666906_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me02.5-007",
          quantity: 1,
        },
      ],
      description: "Each Collection contains 2 Booster Packs, 1 promo card, and 1 coin",
      status: "draft",
    },
    {
      id: "larry",
      name: "Ascended Heroes Collection [Larry]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "666907",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666907_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me02.5-175",
          quantity: 1,
        },
      ],
      description: "Each Collection contains 2 Booster Packs, 1 promo card, and 1 coin",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Collection Case",
      identifiers: {
        tcgplayer: "685195",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "sealed-product",
          variant: "erika",
          quantity: 12,
        },
        {
          type: "sealed-product",
          variant: "larry",
          quantity: 12,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
