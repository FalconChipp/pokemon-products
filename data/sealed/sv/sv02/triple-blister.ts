import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv02",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv02",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "3-pack-blister-varoom",
      name: "Paldea Evolved 3-Pack Blister [Varoom]",
      identifiers: {
        tcgplayer: "493998",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493998_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-026",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "3-pack-blister-tinkatink",
      name: "Paldea Evolved 3-Pack Blister [Tinkatink]",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "493997",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493997_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-025",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
