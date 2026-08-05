import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Elite Trainer Box",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "493974",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493974_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv02",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-027",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers,  4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Paldea Evolved Pokemon Center Elite Trainer Box",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "493973",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493973_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv02",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-027",
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
      name: "Paldea Evolved Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "496911",
      },
      releaseDate: "2023-06-09",
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
