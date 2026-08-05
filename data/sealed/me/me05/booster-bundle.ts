import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me05",
  variants: [
    {
      id: "standard",
      name: "Pitch Black Booster Bundle",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692942",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692942_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Pitch Black Booster Bundle Case",
      identifiers: {
        tcgplayer: "692943",
      },
      releaseDate: "2026-07-17",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 25,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
