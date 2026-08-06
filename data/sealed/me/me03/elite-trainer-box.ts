import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_me03-clefable",
        "boo_me03-meowth",
        "boo_me03-starmie",
        "boo_me03-zygarde",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Perfect Order Elite Trainer Box",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672401",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672401_in_1000x1000.jpg",
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "Perfect Order Pokemon Center Elite Trainer Box",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672404",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672404_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "me03",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_me03-clefable",
            "boo_me03-meowth",
            "boo_me03-starmie",
            "boo_me03-zygarde",
          ],
        },
      ],
      description: "Each Pokémon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Perfect Order Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "672402",
      },
      releaseDate: "2026-03-27",
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
