import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me02",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "3-pack-blister-sneasel",
      name: "Phantasmal Flames 3-Pack Blister [Sneasel]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654154",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654154_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-020",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "3-pack-blister-weavile",
      name: "Phantasmal Flames 3-Pack Blister [Weavile]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654156",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654156_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-021",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "3-pack-blister-case",
      name: "Phantasmal Flames 3-Pack Blister Case",
      identifiers: {
        tcgplayer: "685215",
      },
      releaseDate: "2025-11-14",
      contents: [
        {
          type: "sealed-product",
          variant: "3-pack-blister-sneasel",
          quantity: 12,
        },
        {
          type: "sealed-product",
          variant: "3-pack-blister-weavile",
          quantity: 12,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
