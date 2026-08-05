import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me02",
  base: {
    contents: [
      {
        type: "promo-card",
        card: "mep-022",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "sleeves",
        quantity: 65,
        name: "Mega Charizard",
      },
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
      id: "standard",
      name: "Phantasmal Flames Elite Trainer Box",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654136",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654136_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02",
          quantity: 9,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Phantasmal Flames Pokemon Center Elite Trainer Box",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654135",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654135_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02",
          quantity: 11,
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
      name: "Phantasmal Flames Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "654170",
      },
      releaseDate: "2025-11-14",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
