import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Booster Box",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "493975",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493975_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv02",
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
      name: "Paldea Evolved Booster Box Case",
      identifiers: {
        tcgplayer: "496905",
      },
      releaseDate: "2023-06-09",
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
