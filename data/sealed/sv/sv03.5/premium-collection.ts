import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 12,
        },
      ],
      artworks: [
        "boo_sv03.5-charizard",
        "boo_sv03.5-venusaur",
        "boo_sv03.5-blastoise",
        "boo_sv03.5-mew",
      ],
    },
  ],
  variants: [
    {
      id: "blooming-waters-premium-collection",
      name: "151: Blooming Waters Premium Collection",
      releaseDate: "2025-02-07",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "sv03.5-001",
            "sv03.5-003",
            "sv03.5-007",
            "sv03.5-009",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv03.5-009",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each Blooming Waters Premium Collection contains 12 Booster Packs, 4 promo cards, and 1 jumbo card.",
    },
  ],
} satisfies SealedProductDef;
