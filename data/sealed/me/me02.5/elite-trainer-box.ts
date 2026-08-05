import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me02.5",
  variants: [
    {
      id: "standard",
      name: "Ascended Heroes Elite Trainer Box",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "668496",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668496_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02.5",
          quantity: 9,
        },
        {
          type: "promo-card",
          card: "mep-031",
          quantity: 1,
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
    {
      id: "pc",
      name: "Ascended Heroes Pokemon Center Elite Trainer Box",
      releaseDate: "2026-07-20",
      contents: [
        {
          type: "booster",
          set: "me02.5",
          quantity: 11,
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
      name: "Ascended Heroes Elite Trainer Box Case",
      identifiers: {
        tcgplayer: "679558",
      },
      releaseDate: "2026-02-20",
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
