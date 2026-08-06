import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "other",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 8,
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
      id: "sams-club",
      name: "Sam's Club 151 (4 Mini Tins + 4 Promo Cards Bundle)",
      releaseDate: "2025-10-28",
      thirdParty: {
        tcgplayer: "662302",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/662302_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv03.5-026",
            "sv03.5-068",
            "sv03.5-094",
            "sv03.5-149",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Bundle contains 4 Mini Tins and 4 promo cards.",
    },
  ],
} satisfies SealedProductDef;
