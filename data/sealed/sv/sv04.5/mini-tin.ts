import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "mini-tin",
  set: "sv04.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv04.5",
        quantity: 2,
      },
    ],
  },
  variants: [
    {
      id: "finizen",
      name: "Paldean Fates Mini Tin [Finizen]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528055",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528055_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "flamigo",
      name: "Paldean Fates Mini Tin [Flamigo]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528050",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528050_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "maushold",
      name: "Paldean Fates Mini Tin [Maushold]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528051",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528051_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "tinkatink",
      name: "Paldean Fates Mini Tin [Tinkatink]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528052",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528052_in_1000x1000.jpg",
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
      name: "Paldean Fates Mini Tin Display",
      identifiers: {
        tcgplayer: "528047",
      },
      releaseDate: "2024-02-09",
      contents: [
        {
          type: "sealed-product",
          variant: "finizen",
          quantity: 3,
        },
        {
          type: "sealed-product",
          variant: "flamigo",
          quantity: 3,
        },
        {
          type: "sealed-product",
          variant: "maushold",
          quantity: 3,
        },
        {
          type: "sealed-product",
          variant: "tinkatink",
          quantity: 3,
        },
      ],
    },
    {
      type: "display-case",
      id: "display-case",
      name: "Paldean Fates Mini Tin Display Case",
      identifiers: {
        tcgplayer: "693612",
      },
      releaseDate: "2024-02-09",
      contents: [
        {
          type: "sealed-product",
          packaging: "display",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
