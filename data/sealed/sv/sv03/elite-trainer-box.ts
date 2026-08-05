import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Elite Trainer Box",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501264",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501264_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-044",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Obsidian Flames Pokemon Center Elite Trainer Box",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501266",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501266_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-044",
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
      name: "Obsidian Flames Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "501265",
      },
      releaseDate: "2023-08-11",
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
