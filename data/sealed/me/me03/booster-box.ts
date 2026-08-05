import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me03",
  variants: [
    {
      id: "standard",
      name: "Perfect Order Booster Box",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672394",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672394_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me03",
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
      name: "Perfect Order Booster Box Case",
      identifiers: {
        tcgplayer: "672395",
      },
      releaseDate: "2026-03-27",
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
