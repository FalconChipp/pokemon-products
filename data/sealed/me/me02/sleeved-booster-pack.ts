import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "sleeved-booster-pack",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me02-charizard",
        "boo_me02-gengar",
        "boo_me02-heracross",
        "boo_me02-lopunny",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Sleeved Booster Pack",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654145",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654145_in_1000x1000.jpg",
        },
      ],
      description: "Each pack contains 10 cards.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "sleeved-booster-case",
      name: "Phantasmal Flames Sleeved Booster Case",
      thirdParty: {
        tcgplayer: "655282",
      },
      releaseDate: "2025-11-14",
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
