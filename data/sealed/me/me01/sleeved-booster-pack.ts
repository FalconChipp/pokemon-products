import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 1,
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
      name: "Mega Evolution Sleeved Booster Pack",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644354",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644354_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Mega Evolution Sleeved Booster Case",
      thirdParty: {
        tcgplayer: "650766",
      },
      releaseDate: "2025-09-26",
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
