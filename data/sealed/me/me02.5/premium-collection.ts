import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 14,
        },
      ],
      artworks: [
        "boo_me02.5-charizard",
        "boo_me02.5-dragonite",
        "boo_me02.5-ho-oh",
        "boo_me02.5-lucario",
        "boo_me02.5-mewtwo",
        "boo_me02.5-pikachu",
      ],
    },
  ],
  variants: [
    {
      id: "focused-fighters-premium-collection",
      name: "Ascended Heroes Focused Fighters Premium Collection",
      releaseDate: "2026-07-21",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "me02.5-079",
            "me02.5-116",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "me02.5-116",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each Focused Fighters Premium Collection contains 14 Booster Packs, 4 promo cards, and 1 jumbo card.",
    },
  ],
} satisfies SealedProductDef;
