import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 3,
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
      id: "3-pack-blister-sneasel",
      name: "Phantasmal Flames 3-Pack Blister [Sneasel]",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654154",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654154_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-020",
          ],
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
    {
      id: "3-pack-blister-weavile",
      name: "Phantasmal Flames 3-Pack Blister [Weavile]",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654156",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654156_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-021",
          ],
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "3-pack-blister-case",
      name: "Phantasmal Flames 3-Pack Blister Case",
      thirdParty: {
        tcgplayer: "685215",
      },
      releaseDate: "2025-11-14",
      contents: [
        {
          type: "variant",
          id: "3-pack-blister-sneasel",
          quantity: 12,
        },
        {
          type: "variant",
          id: "3-pack-blister-weavile",
          quantity: 12,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
