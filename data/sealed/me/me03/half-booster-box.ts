import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "me03",
  variants: [
    {
      id: "standard",
      name: "Perfect Order Half Booster Box",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672403",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672403_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me03",
          quantity: 18,
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
