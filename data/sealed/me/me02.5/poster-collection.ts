import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "poster-collection",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 10,
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
      id: "premium-poster-collection-mega-gardevoir",
      name: "Ascended Heroes Premium Poster Collection: Mega Gardevoir",
      releaseDate: "2026-03-20",
      thirdParty: {
        tcgplayer: "668537",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668537_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-032",
          ],
        },
      ],
      description: "Each Premium Poster Collection contains 10 Booster Packs, 1 promo card, 1 double-sided poster (26.875\" × 39\"), and a code card for Pokémon TCG Live",
    },
    {
      id: "premium-poster-collection-mega-lucario",
      name: "Ascended Heroes Premium Poster Collection: Mega Lucario",
      releaseDate: "2026-03-20",
      thirdParty: {
        tcgplayer: "668536",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668536_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-033",
          ],
        },
      ],
      description: "Each Premium Poster Collection contains 10 Booster Packs, 1 promo card, 1 double-sided poster (26.875\" × 39\"), and a code card for Pokémon TCG Live",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "premium-case",
      name: "Ascended Heroes Premium Poster Collection Case",
      thirdParty: {
        tcgplayer: "685000",
      },
      releaseDate: "2026-03-20",
      contents: [
        {
          type: "variant",
          id: "premium-poster-collection-mega-gardevoir",
          quantity: 3,
        },
        {
          type: "variant",
          id: "premium-poster-collection-mega-lucario",
          quantity: 3,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
