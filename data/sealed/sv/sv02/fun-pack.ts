import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "other",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Fun Pack",
      releaseDate: "2023-06-09",
      thirdParty: {
        tcgplayer: "530106",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/530106_in_1000x1000.jpg",
        },
      ],
      description: "Each Fun Pack contains 3 cards.",
    },
  ],
} satisfies SealedProductDef;
