import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 3,
        },
      ],
      artworks: [
        "boo_me01-gardevoir",
        "boo_me01-kangaskhan",
        "boo_me01-lucario",
        "boo_me01-venusaur",
      ],
    },
  ],
  variants: [
    {
      id: "golduck",
      name: "Mega Evolution 3-Pack Blister [Golduck]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644356",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644356_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-008",
          ],
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
    {
      id: "psyduck",
      name: "Mega Evolution 3-Pack Blister [Psyduck]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644357",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644357_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-007",
          ],
        },
      ],
      description: "Each Triple Blister contains 3 booster packs and one promo card.",
    },
  ],
} satisfies SealedProductDef;
