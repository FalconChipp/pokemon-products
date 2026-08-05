import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me02",
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Booster Bundle",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654160",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654160_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02",
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
      name: "Phantasmal Flames Booster Bundle Case",
      identifiers: {
        tcgplayer: "654162",
      },
      releaseDate: "2025-11-14",
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
