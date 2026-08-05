import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv04",
  variants: [
    {
      id: "standard",
      name: "Paradox Rift Booster Box",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "512821",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512821_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
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
      name: "Paradox Rift Booster Box Case",
      identifiers: {
        tcgplayer: "512828",
      },
      releaseDate: "2023-11-03",
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
