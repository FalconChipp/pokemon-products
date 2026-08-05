import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "me02.5",
  variants: [
    {
      id: "focused-fighters-premium-collection",
      name: "Ascended Heroes Focused Fighters Premium Collection",
      releaseDate: "2026-07-21",
      identifiers: {
        tcgplayer: "706959",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/706959_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02.5",
          quantity: 14,
        },
        {
          type: "promo-card",
          cards: [
            "me02.5-079",
            "me02.5-116",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "me02.5-116",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each Focused Fighters Premium Collection contains 14 Booster Packs, 4 promo cards, and 1 jumbo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
