import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "poster-collection",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 3,
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
      id: "standard",
      name: "151 Poster Collection",
      releaseDate: "2023-09-22",
      thirdParty: {
        tcgplayer: "502001",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502001_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-046",
            "svp-047",
            "svp-048",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each 151 Poster Collection contains 3 Booster packs, 3 promo cards, and 1 poster",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "151 Poster Collection Case",
      thirdParty: {
        tcgplayer: "502002",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
