import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "sv04",
  variants: [
    {
      id: "standard",
      name: "Paradox Rift Sleeved Booster Pack",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "517210",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/517210_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
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
      name: "Paradox Rift Sleeved Booster Case",
      identifiers: {
        tcgplayer: "641808",
      },
      releaseDate: "2023-11-03",
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
