import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 3,
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
      id: "3-pack-blister-cleffa",
      name: "Temporal Forces 3-Pack Blister [Cleffa]",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "536229",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536229_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-095",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
    {
      id: "3-pack-blister-cyclizar",
      name: "Temporal Forces 3-Pack Blister [Cyclizar]",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "536227",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/536227_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-096",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
  ],
} satisfies SealedProductDef;
