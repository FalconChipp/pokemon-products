import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "me02",
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Booster Pack",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654144",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654144_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
