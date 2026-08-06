import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 5,
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
      id: "first-partners",
      name: "Ascended Heroes First Partners Deluxe Pin Collection",
      releaseDate: "2026-03-20",
      thirdParty: {
        tcgplayer: "672391",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672391_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02.5-008",
            "me02.5-029",
            "me02.5-041",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each First Partners Deluxe Pin Collection contains 5 Booster Packs, 3 promo cards, and a pin",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "first-partners-case",
      name: "Ascended Heroes First Partners Deluxe Pin Collection Case",
      thirdParty: {
        tcgplayer: "672392",
      },
      releaseDate: "2026-03-20",
      contents: [
        {
          type: "variant",
          id: "first-partners",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
