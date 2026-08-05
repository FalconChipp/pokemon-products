import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me02",
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Booster Box",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654137",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654137_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02",
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
      name: "Phantasmal Flames Booster Box Case",
      identifiers: {
        tcgplayer: "655281",
      },
      releaseDate: "2025-11-14",
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
