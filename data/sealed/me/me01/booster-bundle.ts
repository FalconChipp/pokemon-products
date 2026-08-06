import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 6,
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
      name: "Mega Evolution Booster Bundle",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644362",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644362_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Mega Evolution Booster Bundle Case",
      thirdParty: {
        tcgplayer: "644730",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 25,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
