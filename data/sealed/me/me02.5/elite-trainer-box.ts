import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_me02.5-charizard",
        "boo_me02.5-dragonite",
        "boo_me02.5-ho-oh",
        "boo_me02.5-lucario",
        "boo_me02.5-mewtwo",
        "boo_me02.5-pikachu",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Ascended Heroes Elite Trainer Box",
      releaseDate: "2026-02-20",
      thirdParty: {
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
          type: "promo-card",
          cards: [
            "mep-031",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "Ascended Heroes Pokemon Center Elite Trainer Box",
      releaseDate: "2026-07-20",
      boosters: [
        {
          set: "me02.5",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_me02.5-charizard",
            "boo_me02.5-dragonite",
            "boo_me02.5-ho-oh",
            "boo_me02.5-lucario",
            "boo_me02.5-mewtwo",
            "boo_me02.5-pikachu",
          ],
        },
      ],
      description: "Each Pokemon Center Elite Trainer Box contains 11 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "679558",
      },
      releaseDate: "2026-02-20",
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
