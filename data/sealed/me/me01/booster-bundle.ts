import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me01",
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Booster Bundle",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644362",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644362_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Mega Evolution Booster Bundle Case",
      identifiers: {
        tcgplayer: "644730",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 25,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
