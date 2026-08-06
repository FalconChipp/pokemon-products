import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 6,
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
      name: "Temporal Forces Booster Bundle",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "541017",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/541017_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
} satisfies SealedProductDef;
