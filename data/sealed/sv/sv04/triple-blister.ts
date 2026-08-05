import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv04",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv04",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "3-pack-blister-arctibax",
      name: "Paradox Rift 3-Pack Blister [Arctibax]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "513433",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/513433_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-064",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "3-pack-blister-cetitan",
      name: "Paradox Rift 3-Pack Blister [Cetitan]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "513434",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/513434_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-063",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
