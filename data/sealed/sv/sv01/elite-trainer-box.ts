import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv01",
  variants: [
    {
      id: "koraidon",
      name: "Scarlet & Violet Elite Trainer Box [Koraidon]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478335",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478335_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-014",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "miraidon",
      name: "Scarlet & Violet Elite Trainer Box [Miraidon]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478336",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478336_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-013",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "koraidon-pc",
      name: "Scarlet & Violet Pokemon Center Elite Trainer Box [Koraidon]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478758",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478758_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-014",
          quantity: 1,
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "miraidon-pc",
      name: "Scarlet & Violet Pokemon Center Elite Trainer Box [Miraidon]",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478756",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478756_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-013",
          quantity: 1,
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers,  4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Scarlet & Violet Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "488776",
      },
      releaseDate: "2023-03-21",
      contents: [
        {
          type: "sealed-product",
          variant: "koraidon",
          quantity: 5,
        },
        {
          type: "sealed-product",
          variant: "miraidon",
          quantity: 5,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
