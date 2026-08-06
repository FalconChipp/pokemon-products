import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me04",
  boosters: [
    {
      set: "me04",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me04-dragalge",
        "boo_me04-floette",
        "boo_me04-greninja",
        "boo_me04-pyroar",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Sleeved Booster Pack",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "684448",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684448_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Chaos Rising Sleeved Booster Case",
      thirdParty: {
        tcgplayer: "690684",
      },
      releaseDate: "2026-05-22",
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
