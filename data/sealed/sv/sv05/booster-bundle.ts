import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv05",
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Booster Bundle",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "541017",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/541017_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
