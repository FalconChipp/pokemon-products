import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv02",
  boosters: [
    {
      set: "sv02",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_sv02-meowscarada",
        "boo_sv02-skeledirge",
        "boo_sv02-quaquaval",
        "boo_sv02-chien-pao",
        "boo_sv02-ting-lu",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Elite Trainer Box",
      releaseDate: "2023-06-09",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-027",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers,  4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "Paldea Evolved Pokemon Center Elite Trainer Box",
      releaseDate: "2023-06-09",
      thirdParty: {
        tcgplayer: "493973",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493973_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv02",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv02-meowscarada",
            "boo_sv02-skeledirge",
            "boo_sv02-quaquaval",
            "boo_sv02-chien-pao",
            "boo_sv02-ting-lu",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-027",
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
      name: "Paldea Evolved Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "496911",
      },
      releaseDate: "2023-06-09",
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
