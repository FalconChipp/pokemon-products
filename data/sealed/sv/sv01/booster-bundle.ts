import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Booster Bundle",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478258",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478258_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
