import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 36,
        },
      ],
      artworks: [
        "boo_me01-gardevoir",
        "boo_me01-kangaskhan",
        "boo_me01-lucario",
        "boo_me01-venusaur",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Booster Box",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644298",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644298_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Mega Evolution Booster Box Case",
      thirdParty: {
        tcgplayer: "644731",
      },
      releaseDate: "2025-09-26",
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
