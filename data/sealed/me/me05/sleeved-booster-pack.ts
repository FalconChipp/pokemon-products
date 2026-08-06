import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me05-chandelure",
        "boo_me05-darkrai",
        "boo_me05-excadrill",
        "boo_me05-zeraora",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Pitch Black Sleeved Booster Pack",
      releaseDate: "2026-07-17",
      thirdParty: {
        tcgplayer: "692957",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692957_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Pitch Black Sleeved Booster Case",
      thirdParty: {
        tcgplayer: "692956",
      },
      releaseDate: "2026-07-17",
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
