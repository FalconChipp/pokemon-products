import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Booster Bundle",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501263",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501263_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
