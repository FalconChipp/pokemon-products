import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "sv04",
  variants: [
    {
      id: "standard",
      name: "Paradox Rift Half Booster Box",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "649417",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649417_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
          quantity: 18,
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
