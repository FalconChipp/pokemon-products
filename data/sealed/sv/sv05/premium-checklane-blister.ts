import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv05",
  variants: [
    {
      id: "togekiss",
      name: "Temporal Forces Premium Checklane Blister [Togekiss]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "544687",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/544687_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 1,
        },
        {
          type: "promo-card",
          cards: [
            "sv03-083",
            "sv03-084",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "sv03-05",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
