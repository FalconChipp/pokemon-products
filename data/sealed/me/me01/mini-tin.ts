import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "mini-tin",
  set: "me01",
  base: {
    contents: [
      {
        type: "booster",
        set: "me01",
        quantity: 2,
      },
      {
        type: "accessory",
        category: "sticker",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "art-card",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "mega-gardevoir",
      name: "Mega Heroes Mini Tin [Mega Gardevoir]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "649394",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649394_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "mega-kangaskhan",
      name: "Mega Heroes Mini Tin [Mega Kangaskhan]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "649395",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649395_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "mega-latias",
      name: "Mega Heroes Mini Tin [Mega Latias]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "649397",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649397_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "mega-lucario",
      name: "Mega Heroes Mini Tin [Mega Lucario]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "649400",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649400_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "mega-venusaur",
      name: "Mega Heroes Mini Tin [Mega Venusaur]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "649401",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649401_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Mega Heroes Mini Tin Display",
      identifiers: {
        tcgplayer: "649392",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "sealed-product",
          variant: "mega-gardevoir",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "mega-kangaskhan",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "mega-latias",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "mega-lucario",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "mega-venusaur",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
