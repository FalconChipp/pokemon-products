import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 9,
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
      category: "damage-counter-dice",
      quantity: 6,
    },
    {
      category: "coin",
      quantity: 1,
    },
    {
      category: "coin-flip-die",
      quantity: 1,
    },
    {
      category: "divider",
      quantity: 6,
    },
    {
      category: "players-guide",
      quantity: 1,
    },
    {
      category: "energy-card",
      quantity: 40,
    },
  ],
  variants: [
    {
      id: "mega-gardevoir",
      name: "Mega Evolution Elite Trainer Box [Mega Gardevoir]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644279",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644279_in_1000x1000.jpg",
        },
      ],
      accessories: [
        {
          category: "sleeves",
          quantity: 65,
          name: "Mega Gardevoir",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-009",
            "mep-010",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "mega-lucario",
      name: "Mega Evolution Elite Trainer Box [Mega Lucario]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "648394",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/648394_in_1000x1000.jpg",
        },
      ],
      accessories: [
        {
          category: "sleeves",
          quantity: 65,
          name: "Mega Lucario",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-009",
            "mep-010",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "mega-gardevoir-pc",
      name: "Mega Evolution Pokemon Center Elite Trainer Box [Mega Gardevoir]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "648415",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/648415_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "me01",
          packs: [
            {
              quantity: 11,
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
          category: "sleeves",
          quantity: 65,
          name: "Mega Gardevoir",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-009",
            "mep-010",
          ],
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokémon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "mega-lucario-pc",
      name: "Mega Evolution Pokemon Center Elite Trainer Box [Mega Lucario]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644282",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644282_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "me01",
          packs: [
            {
              quantity: 11,
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
          category: "sleeves",
          quantity: 65,
          name: "Mega Lucario",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-009",
            "mep-010",
          ],
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokémon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Mega Evolution Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "644727",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "variant",
          id: "mega-gardevoir",
          quantity: 5,
        },
        {
          type: "variant",
          id: "mega-lucario",
          quantity: 5,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
