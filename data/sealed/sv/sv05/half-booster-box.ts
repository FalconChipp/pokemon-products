import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 18,
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
      name: "Temporal Forces Half Booster Box",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "649416",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649416_in_1000x1000.jpg",
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
    },
  ],
} satisfies SealedProductDef;
