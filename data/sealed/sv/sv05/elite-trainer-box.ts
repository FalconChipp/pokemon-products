import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_sv05-iron-crown",
        "boo_sv05-iron-leaves",
        "boo_sv05-raging-bolt",
        "boo_sv05-walking-wake",
      ],
    },
  ],
  variants: [
    {
      id: "iron-leaves-ex",
      name: "Temporal Forces Elite Trainer Box [Iron Leaves ex]",
      releaseDate: "2024-03-22",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-098",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "walking-wake",
      name: "Temporal Forces Elite Trainer Box [Walking Wake]",
      releaseDate: "2024-03-22",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-097",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice,1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "iron-leaves-pc",
      name: "Temporal Forces Pokemon Center Elite Trainer Box [Iron Leaves]",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "532853",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/532853_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv05",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv05-iron-crown",
            "boo_sv05-iron-leaves",
            "boo_sv05-raging-bolt",
            "boo_sv05-walking-wake",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-098",
          ],
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Temporal Forces Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "537418",
      },
      releaseDate: "2024-03-22",
      contents: [
        {
          type: "variant",
          id: "iron-leaves-ex",
          quantity: 5,
        },
        {
          type: "variant",
          id: "walking-wake",
          quantity: 5,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
