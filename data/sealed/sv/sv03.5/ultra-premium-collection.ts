import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "sv03.5",
  variants: [
    {
      id: "standard",
      name: "151 Ultra-Premium Collection",
      releaseDate: "2023-10-06",
      identifiers: {
        tcgplayer: "502005",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502005_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 16,
        },
        {
          type: "promo-card",
          cards: [
            "svp-052",
            "svp-053",
          ],
          quantity: 2,
        },
      ],
      description: "Each 151 Ultra-Premium Collection contains 16 Booster Packs, 1 etched metal card, 2 promo cards, 1 playmat, 1 deck box, 1 metallis coin, 6 damage-counter dice, 2 plastic condition markers, and a code card for Pokemon TCG Live",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "151 Ultra-Premium Collection Case",
      identifiers: {
        tcgplayer: "515970",
      },
      releaseDate: "2023-10-06",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
