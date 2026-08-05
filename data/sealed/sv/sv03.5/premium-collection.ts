import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "sv03.5",
  variants: [
    {
      id: "blooming-waters-premium-collection",
      name: "151: Blooming Waters Premium Collection",
      releaseDate: "2025-02-07",
      identifiers: {
        tcgplayer: "609597",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/609597_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 12,
        },
        {
          type: "promo-card",
          cards: [
            "sv03.5-001",
            "sv03.5-003",
            "sv03.5-007",
            "sv03.5-009",
          ],
          quantity: 4,
        },
        {
          type: "promo-card",
          card: "sv03.5-009",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each Blooming Waters Premium Collection contains 12 Booster Packs, 4 promo cards, and 1 jumbo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
