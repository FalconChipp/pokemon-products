import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "me02.5",
  variants: [
    {
      id: "standard",
      name: "Ascended Heroes Booster Pack",
      releaseDate: "2026-01-30",
      identifiers: {
        tcgplayer: "672434",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672434_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02.5",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
