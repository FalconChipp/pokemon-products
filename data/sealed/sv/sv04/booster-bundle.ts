import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv04",
  variants: [
    {
      id: "standard",
      name: "Paradox Rift Booster Bundle",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "512820",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512820_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
