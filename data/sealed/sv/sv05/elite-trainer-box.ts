import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv05",
  variants: [
    {
      id: "iron-leaves-ex",
      name: "Temporal Forces Elite Trainer Box [Iron Leaves ex]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "532848",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/532848_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-098",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "walking-wake",
      name: "Temporal Forces Elite Trainer Box [Walking Wake]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "532845",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/532845_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-097",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice,1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "iron-leaves-pc",
      name: "Temporal Forces Pokemon Center Elite Trainer Box [Iron Leaves]",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "532853",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/532853_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-098",
          quantity: 1,
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Temporal Forces Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "537418",
      },
      releaseDate: "2024-03-22",
      contents: [
        {
          type: "sealed-product",
          variant: "iron-leaves-ex",
          quantity: 5,
        },
        {
          type: "sealed-product",
          variant: "walking-wake",
          quantity: 5,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
