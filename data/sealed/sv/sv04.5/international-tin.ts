import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tin",
  set: "sv04.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv04.5",
        quantity: 5,
      },
    ],
  },
  variants: [
    {
      id: "charizard-ex",
      name: "Paldean Fates International Tin [Charizard ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528063",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528063_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-074",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 5 Booster Packs and 1 promo card.",
      status: "draft",
    },
    {
      id: "great-tusk-ex",
      name: "Paldean Fates International Tin [Great Tusk ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528060",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528060_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-072",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 5 Booster Packs and 1 promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
