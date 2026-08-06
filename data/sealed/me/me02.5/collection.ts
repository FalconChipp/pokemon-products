import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 2,
        },
      ],
      artworks: [
        "boo_me02.5-charizard",
        "boo_me02.5-dragonite",
        "boo_me02.5-ho-oh",
        "boo_me02.5-lucario",
        "boo_me02.5-mewtwo",
        "boo_me02.5-pikachu",
      ],
    },
  ],
  variants: [
    {
      id: "erika",
      name: "Ascended Heroes Collection [Erika]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "666906",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666906_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02.5-007",
          ],
        },
      ],
      description: "Each Collection contains 2 Booster Packs, 1 promo card, and 1 coin",
    },
    {
      id: "larry",
      name: "Ascended Heroes Collection [Larry]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "666907",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666907_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02.5-175",
          ],
        },
      ],
      description: "Each Collection contains 2 Booster Packs, 1 promo card, and 1 coin",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Collection Case",
      thirdParty: {
        tcgplayer: "685195",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "variant",
          id: "erika",
          quantity: 12,
        },
        {
          type: "variant",
          id: "larry",
          quantity: 12,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
