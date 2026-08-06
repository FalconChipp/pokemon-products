import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 6,
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
      name: "Phantasmal Flames Booster Bundle",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654160",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654160_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Phantasmal Flames Booster Bundle Case",
      thirdParty: {
        tcgplayer: "654162",
      },
      releaseDate: "2025-11-14",
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
