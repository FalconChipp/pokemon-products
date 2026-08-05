import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv05",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv05",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "3-pack-blister-cleffa",
      name: "Temporal Forces 3-Pack Blister [Cleffa]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "536229",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536229_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-095",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "3-pack-blister-cyclizar",
      name: "Temporal Forces 3-Pack Blister [Cyclizar]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "536227",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536227_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-096",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
