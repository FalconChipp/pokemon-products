import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "other",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Fun Pack",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "530121",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/530121_in_1000x1000.jpg",
        },
      ],
      description: "Each Fun Pack contains 3 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
