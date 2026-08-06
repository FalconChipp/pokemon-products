import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 4,
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
  accessories: [
    {
      category: "deck",
      quantity: 1,
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Build & Battle Box",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644363",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644363_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-001",
            "mep-002",
            "mep-003",
            "mep-004",
          ],
          stamp: "set-logo",
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Mega Evolution Build & Battle Box Display",
      thirdParty: {
        tcgplayer: "644733",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
