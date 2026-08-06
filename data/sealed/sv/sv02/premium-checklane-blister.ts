import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv02",
  boosters: [
    {
      set: "sv02",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv02-meowscarada",
        "boo_sv02-skeledirge",
        "boo_sv02-quaquaval",
        "boo_sv02-chien-pao",
        "boo_sv02-ting-lu",
      ],
    },
  ],
  variants: [
    {
      id: "arboliva",
      name: "Paldea Evolved Premium Checklane Blister [Arboliva]",
      releaseDate: "2023-06-09",
      thirdParty: {
        tcgplayer: "622968",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/622968_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-020",
            "sv01-022",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv01-023",
          ],
          stamp: "vertical-line-holo",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
    },
    {
      id: "pawmot",
      name: "Paldea Evolved Premium Checklane Blister [Pawmot]",
      releaseDate: "2023-06-09",
      thirdParty: {
        tcgplayer: "622967",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/622967_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv01-073",
            "sv01-075",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv01-076",
          ],
          stamp: "vertical-line-holo",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
    },
  ],
} satisfies SealedProductDef;
