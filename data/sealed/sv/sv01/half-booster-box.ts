import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Half Booster Box",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "649407",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649407_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 18,
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
