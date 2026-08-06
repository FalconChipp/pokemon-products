import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_sv03.5-charizard",
        "boo_sv03.5-venusaur",
        "boo_sv03.5-blastoise",
        "boo_sv03.5-mew",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "151 Elite Trainer Box",
      releaseDate: "2023-09-22",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-051",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "151 Pokemon Center Elite Trainer Box",
      releaseDate: "2023-09-22",
      thirdParty: {
        tcgplayer: "501999",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501999_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv03.5",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv03.5-charizard",
            "boo_sv03.5-venusaur",
            "boo_sv03.5-blastoise",
            "boo_sv03.5-mew",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-051",
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
      name: "151 Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "506640",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
