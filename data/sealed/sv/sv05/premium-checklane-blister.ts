import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-checklane-blister",
  set: "sv05",
  boosters: [
    {
      set: "sv05",
      packs: [
        {
          quantity: 1,
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
      id: "togekiss",
      name: "Temporal Forces Premium Checklane Blister [Togekiss]",
      releaseDate: "2024-03-22",
      thirdParty: {
        tcgplayer: "544687",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/544687_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv03-083",
            "sv03-084",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv03-05",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Premium Checklane Blister contains 1 booster pack, 3 promo cards, and a coin.",
    },
  ],
} satisfies SealedProductDef;
