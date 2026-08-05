import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me05",
  variants: [
    {
      id: "standard",
      name: "Pitch Black Booster Box",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692939",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692939_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
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
      name: "Pitch Black Booster Box Case",
      identifiers: {
        tcgplayer: "692941",
      },
      releaseDate: "2026-07-17",
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
