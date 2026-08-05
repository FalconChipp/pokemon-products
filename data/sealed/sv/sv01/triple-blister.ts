import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv01",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv01",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "3-pack-blister-arcanine",
      name: "Scarlet & Violet 3-Pack Blister [Arcanine]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478761",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478761_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-011",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "3-pack-blister-dondozo",
      name: "Scarlet & Violet 3-Pack Blister [Dondozo]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478762",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478762_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-012",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
