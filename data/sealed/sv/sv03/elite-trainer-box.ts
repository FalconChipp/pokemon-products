import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv03",
  boosters: [
    {
      set: "sv03",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_sv03-charizard",
        "boo_sv03-tyranitar",
        "boo_sv03-dragonite",
        "boo_sv03-revavroom",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Elite Trainer Box",
      releaseDate: "2023-08-11",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-044",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "Obsidian Flames Pokemon Center Elite Trainer Box",
      releaseDate: "2023-08-11",
      thirdParty: {
        tcgplayer: "501266",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501266_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv03",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv03-charizard",
            "boo_sv03-tyranitar",
            "boo_sv03-dragonite",
            "boo_sv03-revavroom",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-044",
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
      name: "Obsidian Flames Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "501265",
      },
      releaseDate: "2023-08-11",
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
