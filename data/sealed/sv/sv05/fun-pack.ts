import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "other",
  set: "sv05",
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Fun Pack",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "607502",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/607502_in_1000x1000.jpg",
        },
      ],
      description: "Each Fun Pack contains 3 cards.",
    },
  ],
} satisfies SealedProductDef;
