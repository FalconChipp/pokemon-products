import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Booster Pack",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "493976",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493976_in_1000x1000.jpg",
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
} satisfies SealedProductDef;
