import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tech-sticker-collection",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 3,
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
      id: "charmander",
      name: "Mega Evolution: Ascended Heroes Tech Sticker Collection [Charmander]",
      releaseDate: "2026-01-30",
      thirdParty: {
        tcgplayer: "666908",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666908_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02.5-020",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
    },
    {
      id: "gastly",
      name: "Mega Evolution: Ascended Heroes Tech Sticker Collection [Gastly]",
      releaseDate: "2026-01-30",
      thirdParty: {
        tcgplayer: "666909",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/666909_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02.5-123",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Tech Sticker Collection Case",
      thirdParty: {
        tcgplayer: "681333",
      },
      releaseDate: "2026-01-30",
      contents: [
        {
          type: "variant",
          id: "charmander",
          quantity: 6,
        },
        {
          type: "variant",
          id: "gastly",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
