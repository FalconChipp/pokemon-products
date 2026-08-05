import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-pack",
  set: "sv04.5",
  variants: [
    {
      id: "standard",
      name: "Paldean Fates Booster Pack",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528038",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528038_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 1,
        },
      ],
      description: "Each pack contains 10 cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
