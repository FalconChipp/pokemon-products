import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me02",
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Sleeved Booster Pack",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654145",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654145_in_1000x1000.jpg",
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
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Phantasmal Flames Sleeved Booster Case",
      identifiers: {
        tcgplayer: "655282",
      },
      releaseDate: "2025-11-14",
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
