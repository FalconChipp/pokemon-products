import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tech-sticker-collection",
  set: "me02.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02.5",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "charmander",
      name: "Mega Evolution: Ascended Heroes Tech Sticker Collection [Charmander]",
      releaseDate: "2026-01-30",
      identifiers: {
        tcgplayer: "666908",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666908_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me02.5-020",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
      status: "draft",
    },
    {
      id: "gastly",
      name: "Mega Evolution: Ascended Heroes Tech Sticker Collection [Gastly]",
      releaseDate: "2026-01-30",
      identifiers: {
        tcgplayer: "666909",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666909_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me02.5-123",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Tech Sticker Collection Case",
      identifiers: {
        tcgplayer: "681333",
      },
      releaseDate: "2026-01-30",
      contents: [
        {
          type: "sealed-product",
          variant: "charmander",
          quantity: 6,
        },
        {
          type: "sealed-product",
          variant: "gastly",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
