import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me04",
  variants: [
    {
      id: "3-pack-blister-charmeleon",
      name: "Chaos Rising 3-Pack Blister [Charmeleon]",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684458",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684458_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me04",
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "mep-079",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "3-pack-blister-case",
      name: "Chaos Rising 3-Pack Blister Case",
      identifiers: {
        tcgplayer: "695118",
      },
      releaseDate: "2026-05-22",
      contents: [
        {
          type: "sealed-product",
          variant: "3-pack-blister-charmeleon",
          quantity: 24,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
