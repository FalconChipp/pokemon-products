import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv04",
  variants: [
    {
      id: "iron-valiant",
      name: "Paradox Rift Elite Trainer Box [Iron Valiant]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "512813",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512813_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
          quantity: 9,
        },
        {
          type: "promo-card",
          possibleCards: [
            "svp-065",
            "svp-066",
          ],
          selection: "one-of",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "roaring-moon",
      name: "Paradox Rift Elite Trainer Box [Roaring Moon]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "512815",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512815_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
          quantity: 9,
        },
        {
          type: "promo-card",
          possibleCards: [
            "svp-065",
            "svp-066",
          ],
          selection: "one-of",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "iron-valiant-pc",
      name: "Paradox Rift Pokemon Center Elite Trainer Box [Iron Valiant]",
      releaseDate: "2023-11-03",
      identifiers: {
        tcgplayer: "512801",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512801_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04",
          quantity: 11,
        },
        {
          type: "promo-card",
          possibleCards: [
            "svp-065",
            "svp-066",
          ],
          selection: "one-of",
          quantity: 1,
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
