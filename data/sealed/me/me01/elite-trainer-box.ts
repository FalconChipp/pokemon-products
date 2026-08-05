import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me01",
  base: {
    contents: [
      {
        type: "accessory",
        category: "damage-counter-dice",
        quantity: 6,
      },
      {
        type: "accessory",
        category: "coin",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "coin-flip-die",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "divider",
        quantity: 6,
      },
      {
        type: "accessory",
        category: "players-guide",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "energy-card",
        quantity: 40,
      },
    ],
  },
  variants: [
    {
      id: "mega-gardevoir",
      name: "Mega Evolution Elite Trainer Box [Mega Gardevoir]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644279",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644279_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 9,
        },
        {
          type: "promo-card",
          possibleCards: [
            "mep-009",
            "mep-010",
          ],
          selection: "one-of",
          quantity: 1,
        },
        {
          type: "accessory",
          category: "sleeves",
          quantity: 65,
          name: "Mega Gardevoir",
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "mega-lucario",
      name: "Mega Evolution Elite Trainer Box [Mega Lucario]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "648394",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/648394_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 9,
        },
        {
          type: "promo-card",
          possibleCards: [
            "mep-009",
            "mep-010",
          ],
          selection: "one-of",
          quantity: 1,
        },
        {
          type: "accessory",
          category: "sleeves",
          quantity: 65,
          name: "Mega Lucario",
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "mega-gardevoir-pc",
      name: "Mega Evolution Pokemon Center Elite Trainer Box [Mega Gardevoir]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "648415",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/648415_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 11,
        },
        {
          type: "promo-card",
          possibleCards: [
            "mep-009",
            "mep-010",
          ],
          selection: "one-of",
          quantity: 1,
          stamp: "pokemon-center",
        },
        {
          type: "accessory",
          category: "sleeves",
          quantity: 65,
          name: "Mega Gardevoir",
        },
      ],
      description: "Each Pokémon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "mega-lucario-pc",
      name: "Mega Evolution Pokemon Center Elite Trainer Box [Mega Lucario]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644282",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644282_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 11,
        },
        {
          type: "promo-card",
          possibleCards: [
            "mep-009",
            "mep-010",
          ],
          selection: "one-of",
          quantity: 1,
          stamp: "pokemon-center",
        },
        {
          type: "accessory",
          category: "sleeves",
          quantity: 65,
          name: "Mega Lucario",
        },
      ],
      description: "Each Pokémon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Mega Evolution Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "644727",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "sealed-product",
          variant: "mega-gardevoir",
          quantity: 5,
        },
        {
          type: "sealed-product",
          variant: "mega-lucario",
          quantity: 5,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
