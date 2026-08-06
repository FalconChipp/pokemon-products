import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv01",
  boosters: [
    {
      set: "sv01",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv01-koraidon",
        "boo_sv01-miraidon",
        "boo_sv01-gyarados",
        "boo_sv01-starters",
      ],
    },
  ],
  variants: [
    {
      id: "espathra",
      name: "Scarlet & Violet Single Pack Blister [Espathra]",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "478766",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478766_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-010",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 1 promo card.",
    },
    {
      id: "spidops",
      name: "Scarlet & Violet Single Pack Blister [Spidops]",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "478765",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478765_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-009",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
  ],
} satisfies SealedProductDef;
