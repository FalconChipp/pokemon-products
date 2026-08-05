import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "sv05",
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Half Booster Box",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "649416",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649416_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 18,
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
