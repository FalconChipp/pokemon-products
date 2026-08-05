import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "sv04.5",
  variants: [
    {
      id: "quaquaval-ex",
      name: "Paldean Fates Premium Collection [Quaquaval ex]",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528082",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528082_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 8,
        },
        {
          type: "promo-card",
          cards: [
            "svp-082",
            "svp-083",
            "svp-084",
          ],
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "svp-084",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 8 Booster Packs, 3 promo cards, and 1 jumbo card.",
      status: "draft",
    },
    {
      id: "meowscarada-ex",
      name: "Paldean Fates Premium Collection [Meowscarada ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528079",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528079_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 8,
        },
        {
          type: "promo-card",
          cards: [
            "svp-076",
            "svp-077",
            "svp-078",
          ],
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "svp-078",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 8 Booster Packs, 3 promo cards, and 1 jumbo card.",
      status: "draft",
    },
    {
      id: "skeledirge-ex",
      name: "Paldean Fates Premium Collection [Skeledirge ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528080",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528080_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 8,
        },
        {
          type: "promo-card",
          cards: [
            "svp-079",
            "svp-080",
            "svp-081",
          ],
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "svp-081",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 8 Booster Packs, 3 promo cards, and 1 jumbo card.",
      status: "draft",
    },
    {
      id: "great-tusk-ex-and-iron-treads-ex-premium-collection",
      name: "Paldean Fates Great Tusk ex & Iron Treads ex Premium Collection",
      releaseDate: "2025-12-01",
      identifiers: {
        tcgplayer: "665113",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/665113_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 11,
        },
        {
          type: "promo-card",
          cards: [
            "svp-072",
            "svp-073",
          ],
          quantity: 2,
          stamp: "set-logo",
        },
        {
          type: "promo-card",
          card: "svp-072",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 11 Booster Packs, 4 promo cards, and 1 jumbo card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Paldean Fates Premium Collection Case",
      identifiers: {
        tcgplayer: "693569",
      },
      releaseDate: "2024-01-26",
      contents: [
        {
          type: "sealed-product",
          variant: "meowscarada-ex",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "quaquaval-ex",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "skeledirge-ex",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
