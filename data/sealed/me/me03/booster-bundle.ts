import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me03",
  variants: [
    {
      id: "standard",
      name: "Perfect Order Booster Bundle",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672396",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672396_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me03",
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
      name: "Perfect Order Booster Bundle Case",
      identifiers: {
        tcgplayer: "672397",
      },
      releaseDate: "2026-03-27",
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
