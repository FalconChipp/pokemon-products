import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv04",
  boosters: [
    {
      set: "sv04",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv04-armarouge",
        "boo_sv04-garchomp",
        "boo_sv04-iron-valiant",
        "boo_sv04-roaring-moon",
      ],
    },
  ],
  variants: [
    {
      id: "hydreigon",
      name: "Paradox Rift Premium Checklane Blister [Hydreigon]",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "546605",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/546605_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv02-138",
            "sv02-139",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv02-140",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
    },
    {
      id: "tinkaton",
      name: "Paradox Rift Premium Checklane Blister [Tinkaton]",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "546606",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/546606_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv02-102",
            "sv02-104",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv02-105",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
    },
  ],
} satisfies SealedProductDef;
