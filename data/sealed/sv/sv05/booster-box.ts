import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv05",
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Booster Box",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "536225",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536225_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
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
      name: "Temporal Forces Booster Box Case",
      identifiers: {
        tcgplayer: "537417",
      },
      releaseDate: "2024-03-22",
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
