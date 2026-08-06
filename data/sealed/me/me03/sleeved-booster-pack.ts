import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me03-clefable",
        "boo_me03-meowth",
        "boo_me03-starmie",
        "boo_me03-zygarde",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Perfect Order Sleeved Booster Pack",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672412",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672412_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Perfect Order Sleeved Booster Case",
      thirdParty: {
        tcgplayer: "672411",
      },
      releaseDate: "2026-03-27",
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
