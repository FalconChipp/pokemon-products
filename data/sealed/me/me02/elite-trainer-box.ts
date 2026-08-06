import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "elite-trainer-box",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 9,
        },
      ],
      artworks: [
        "boo_me02-charizard",
        "boo_me02-gengar",
        "boo_me02-heracross",
        "boo_me02-lopunny",
      ],
    },
  ],
  accessories: [
    {
      category: "sleeves",
      quantity: 65,
      name: "Mega Charizard",
    },
    {
      category: "damage-counter-dice",
      quantity: 6,
    },
    {
      category: "coin",
      quantity: 1,
    },
    {
      category: "coin-flip-die",
      quantity: 1,
    },
    {
      category: "divider",
      quantity: 6,
    },
    {
      category: "players-guide",
      quantity: 1,
    },
    {
      category: "energy-card",
      quantity: 40,
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Elite Trainer Box",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654136",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654136_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-022",
          ],
        },
      ],
      description: "Each Elite Trainer Box contains 9 booster packs, a promo card, 65 card sleeves, 40 Energy cards, A player's guide, 6 damage-counter dice, 1 competition-legal coin-flip die, 1 plastic coin, 6 dividers, a collector's box to hold everything, and a code card for Pokémon TCG Live.",
    },
    {
      id: "pc",
      name: "Phantasmal Flames Pokemon Center Elite Trainer Box",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654135",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654135_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "me02",
          packs: [
            {
              quantity: 11,
            },
          ],
          artworks: [
            "boo_me02-charizard",
            "boo_me02-gengar",
            "boo_me02-heracross",
            "boo_me02-lopunny",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-022",
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
      name: "Phantasmal Flames Elite Trainer Box Case",
      thirdParty: {
        tcgplayer: "654170",
      },
      releaseDate: "2025-11-14",
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
