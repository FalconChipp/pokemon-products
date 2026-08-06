import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
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
      id: "standard",
      name: "Paradox Rift Sleeved Booster Pack",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "517210",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/517210_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Paradox Rift Sleeved Booster Case",
      thirdParty: {
        tcgplayer: "641808",
      },
      releaseDate: "2023-11-03",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 144,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
