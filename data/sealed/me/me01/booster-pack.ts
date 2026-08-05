import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "me01",
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Booster Pack",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644352",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644352_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
