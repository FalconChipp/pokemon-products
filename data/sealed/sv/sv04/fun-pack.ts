import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "other",
  set: "sv04",
  variants: [
    {
      id: "standard",
      name: "Paradox Rift Fun Pack",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "607504",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/607504_in_1000x1000.jpg",
        },
      ],
      description: "Each Fun Pack contains 3 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
