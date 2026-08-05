import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me03",
  variants: [
    {
      id: "3-pack-blister-chikorita",
      name: "Perfect Order 3-Pack Blister [Chikorita]",
      releaseDate: "2026-03-27",
      identifiers: {
        tcgplayer: "672393",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672393_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me03",
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "mep-069",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
