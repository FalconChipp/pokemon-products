import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me04",
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Elite Trainer Box",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684450",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684450_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me04",
          quantity: 9,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Chaos Rising Pokemon Center Elite Trainer Box",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684452",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684452_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me04",
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
      name: "Chaos Rising Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "684451",
      },
      releaseDate: "2026-05-22",
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
