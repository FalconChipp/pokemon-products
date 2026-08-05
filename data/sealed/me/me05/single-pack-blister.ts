import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me05",
  variants: [
    {
      id: "slowpoke",
      name: "Pitch Black Single Pack Blister [Slowpoke]",
      identifiers: {
        tcgplayer: "692955",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692955_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "mep-086",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
