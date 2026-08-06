import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 16,
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
      name: "151 Ultra-Premium Collection",
      releaseDate: "2023-10-06",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-052",
            "svp-053",
          ],
        },
      ],
      description: "Each 151 Ultra-Premium Collection contains 16 Booster Packs, 1 etched metal card, 2 promo cards, 1 playmat, 1 deck box, 1 metallis coin, 6 damage-counter dice, 2 plastic condition markers, and a code card for Pokemon TCG Live",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "151 Ultra-Premium Collection Case",
      thirdParty: {
        tcgplayer: "515970",
      },
      releaseDate: "2023-10-06",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
