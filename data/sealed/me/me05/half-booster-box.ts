import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "me05",
  variants: [
    {
      id: "standard",
      name: "Pitch Black Half Booster Box",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692940",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692940_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 18,
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
