import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Sleeved Booster Pack",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "496927",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/496927_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv02",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Paldea Evolved Sleeved Booster Case",
      identifiers: {
        tcgplayer: "609027",
      },
      releaseDate: "2023-06-09",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 144,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
