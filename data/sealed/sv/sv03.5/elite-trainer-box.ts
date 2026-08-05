import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv03.5",
  variants: [
    {
      id: "standard",
      name: "151 Elite Trainer Box",
      releaseDate: "2023-09-22",
      identifiers: {
        tcgplayer: "503313",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/503313_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-051",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "151 Pokemon Center Elite Trainer Box",
      releaseDate: "2023-09-22",
      identifiers: {
        tcgplayer: "501999",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501999_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-051",
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
      name: "151 Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "506640",
      },
      releaseDate: "2023-09-22",
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
