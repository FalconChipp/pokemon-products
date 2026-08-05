import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me01",
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Booster Box",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644298",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644298_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 36,
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Mega Evolution Booster Box Case",
      identifiers: {
        tcgplayer: "644731",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
