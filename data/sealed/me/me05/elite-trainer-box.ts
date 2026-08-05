import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me05",
  variants: [
    {
      id: "standard",
      name: "Pitch Black Elite Trainer Box",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692947",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692947_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "mep-088",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Pitch Black Pokemon Center Elite Trainer Box",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692949",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692949_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "mep-088",
          quantity: 1,
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Pitch Black Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "692948",
      },
      releaseDate: "2026-07-17",
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
