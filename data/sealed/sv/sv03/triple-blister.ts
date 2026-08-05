import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv03",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv03",
        quantity: 3,
      },
    ],
  },
  variants: [
    {
      id: "3-pack-blister-eevee",
      name: "Obsidian Flames 3-Pack Blister [Eevee]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501259",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501259_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-043",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "3-pack-blister-houndstone",
      name: "Obsidian Flames 3-Pack Blister [Houndstone]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501260",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501260_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-042",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
