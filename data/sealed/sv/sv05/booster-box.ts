import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 36,
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
      name: "Temporal Forces Booster Box",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "536225",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536225_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Temporal Forces Booster Box Case",
      thirdParty: {
        tcgplayer: "537417",
      },
      releaseDate: "2024-03-22",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
