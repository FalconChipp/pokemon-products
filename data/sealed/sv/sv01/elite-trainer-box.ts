import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv01",
  boosters: [
    {
      set: "sv01",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_sv01-koraidon",
        "boo_sv01-miraidon",
        "boo_sv01-gyarados",
        "boo_sv01-starters",
      ],
    },
  ],
  variants: [
    {
      id: "koraidon",
      name: "Scarlet & Violet Elite Trainer Box [Koraidon]",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "478335",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478335_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-014",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "miraidon",
      name: "Scarlet & Violet Elite Trainer Box [Miraidon]",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "478336",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478336_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-013",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "koraidon-pc",
      name: "Scarlet & Violet Pokemon Center Elite Trainer Box [Koraidon]",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "478758",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478758_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv01",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv01-koraidon",
            "boo_sv01-miraidon",
            "boo_sv01-gyarados",
            "boo_sv01-starters",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-014",
          ],
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "miraidon-pc",
      name: "Scarlet & Violet Pokemon Center Elite Trainer Box [Miraidon]",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "478756",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478756_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv01",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv01-koraidon",
            "boo_sv01-miraidon",
            "boo_sv01-gyarados",
            "boo_sv01-starters",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-013",
          ],
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers,  4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Scarlet & Violet Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "488776",
      },
      releaseDate: "2023-03-21",
      contents: [
        {
          type: "variant",
          id: "koraidon",
          quantity: 5,
        },
        {
          type: "variant",
          id: "miraidon",
          quantity: 5,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
