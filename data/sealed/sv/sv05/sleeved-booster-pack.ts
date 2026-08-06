import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv05-iron-crown",
        "boo_sv05-iron-leaves",
        "boo_sv05-raging-bolt",
        "boo_sv05-walking-wake",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Sleeved Booster Pack",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "538787",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/538787_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
} satisfies SealedProductDef;
