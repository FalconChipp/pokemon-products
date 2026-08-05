import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv03",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv03",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "paldean-wooper",
      name: "Obsidian Flames Single Pack Blister [Paldean Wooper]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "512047",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512047_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-041",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "pawmi",
      name: "Obsidian Flames Single Pack Blister [Pawmi]",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501262",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501262_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-040",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
