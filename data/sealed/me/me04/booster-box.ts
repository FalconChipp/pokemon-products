import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me04",
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Booster Box",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684444",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684444_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me04",
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
      name: "Chaos Rising Booster Box Case",
      identifiers: {
        tcgplayer: "684445",
      },
      releaseDate: "2026-05-22",
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
