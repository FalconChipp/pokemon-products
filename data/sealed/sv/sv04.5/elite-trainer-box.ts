import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv04.5",
  variants: [
    {
      id: "standard",
      name: "Paldean Fates Elite Trainer Box",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528040",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528040_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "svp-075",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Paldean Fates Pokemon Center Elite Trainer Box",
      releaseDate: "2024-01-26",
      identifiers: {
        tcgplayer: "528039",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528039_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 11,
        },
        {
          type: "promo-card",
          card: "svp-075",
          quantity: 1,
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
