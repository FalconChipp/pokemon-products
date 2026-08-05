import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Sleeved Booster Pack",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "534087",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/534087_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
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
      name: "Obsidian Flames Sleeved Booster Case",
      identifiers: {
        tcgplayer: "606743",
      },
      releaseDate: "2023-08-11",
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
