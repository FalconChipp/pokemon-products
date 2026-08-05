import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tech-sticker-collection",
  set: "sv04.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv04.5",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "fidough",
      name: "Paldean Fates Tech Sticker Collection [Fidough]",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528043",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528043_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-069",
          quantity: 1,
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
      status: "draft",
    },
    {
      id: "greavard",
      name: "Paldean Fates Tech Sticker Collection [Greavard]",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528045",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528045_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-070",
          quantity: 1,
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
      status: "draft",
    },
    {
      id: "maschiff",
      name: "Paldean Fates Tech Sticker Collection [Maschiff]",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528044",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528044_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-071",
          quantity: 1,
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
      name: "Paldean Fates Tech Sticker Collection Case",
      identifiers: {
        tcgplayer: "654599",
      },
      releaseDate: "2024-01-26",
      contents: [
        {
          type: "sealed-product",
          variant: "fidough",
          quantity: 4,
        },
        {
          type: "sealed-product",
          variant: "greavard",
          quantity: 4,
        },
        {
          type: "sealed-product",
          variant: "maschiff",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
