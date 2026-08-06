import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "sv04.5",
  boosters: [
    {
      set: "sv04.5",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_sv04.5-pikachu",
        "boo_sv04.5-tinkaton",
        "boo_sv04.5-ceruledge",
        "boo_sv04.5-dondozo",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Paldean Fates Elite Trainer Box",
      releaseDate: "2024-01-26",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "svp-075",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "Paldean Fates Pokemon Center Elite Trainer Box",
      releaseDate: "2024-01-26",
      thirdParty: {
        tcgplayer: "528039",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528039_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv04.5",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_sv04.5-pikachu",
            "boo_sv04.5-tinkaton",
            "boo_sv04.5-ceruledge",
            "boo_sv04.5-dondozo",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-075",
          ],
          stamp: "pokemon-center",
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 plastic condition markers, 4 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
  ],
} satisfies SealedProductDef;
