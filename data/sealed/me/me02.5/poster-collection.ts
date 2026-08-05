import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "poster-collection",
  set: "me02.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02.5",
        quantity: 10,
      },
    ],
  },
  variants: [
    {
      id: "premium-poster-collection-mega-gardevoir",
      name: "Ascended Heroes Premium Poster Collection: Mega Gardevoir",
      releaseDate: "2026-03-20",
      identifiers: {
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
          card: "mep-032",
          quantity: 1,
        },
      ],
      description: "Each Premium Poster Collection contains 10 Booster Packs, 1 promo card, 1 double-sided poster (26.875\" × 39\"), and a code card for Pokémon TCG Live",
      status: "draft",
    },
    {
      id: "premium-poster-collection-mega-lucario",
      name: "Ascended Heroes Premium Poster Collection: Mega Lucario",
      releaseDate: "2026-03-20",
      identifiers: {
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
          card: "mep-033",
          quantity: 1,
        },
      ],
      description: "Each Premium Poster Collection contains 10 Booster Packs, 1 promo card, 1 double-sided poster (26.875\" × 39\"), and a code card for Pokémon TCG Live",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "premium-case",
      name: "Ascended Heroes Premium Poster Collection Case",
      identifiers: {
        tcgplayer: "685000",
      },
      releaseDate: "2026-03-20",
      contents: [
        {
          type: "sealed-product",
          variant: "premium-poster-collection-mega-gardevoir",
          quantity: 3,
        },
        {
          type: "sealed-product",
          variant: "premium-poster-collection-mega-lucario",
          quantity: 3,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
