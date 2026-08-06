import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me04",
  boosters: [
    {
      set: "me04",
      packs: [
        {
          quantity: 3,
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
      id: "3-pack-blister-charmeleon",
      name: "Chaos Rising 3-Pack Blister [Charmeleon]",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "684458",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684458_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-079",
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
      name: "Chaos Rising 3-Pack Blister Case",
      thirdParty: {
        tcgplayer: "695118",
      },
      releaseDate: "2026-05-22",
      contents: [
        {
          type: "variant",
          id: "3-pack-blister-charmeleon",
          quantity: 24,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
