import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-stadium",
  set: "sv04",
  boosters: [
    {
      set: "sv04",
      packs: [
        {
          quantity: 11,
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
      id: "standard",
      name: "Paradox Rift Build & Battle Stadium",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "514070",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/514070_in_1000x1000.jpg",
        },
      ],
      description: "Each Build & Battle Stadium contains 2 Build & Battle Boxes, 3 Booster Packs, 121 Energy cards, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 condition markers, and a box to hold everything.",
    },
  ],
} satisfies SealedProductDef;
