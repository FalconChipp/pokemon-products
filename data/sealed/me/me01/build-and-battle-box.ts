import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me01",
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Build & Battle Box",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644363",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644363_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 4,
        },
        {
          type: "promo-card",
          possibleCards: [
            "mep-001",
            "mep-002",
            "mep-003",
            "mep-004",
          ],
          selection: "one-of",
          quantity: 1,
          stamp: "set-logo",
        },
        {
          type: "accessory",
          category: "deck",
          quantity: 1,
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Mega Evolution Build & Battle Box Display",
      identifiers: {
        tcgplayer: "644733",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
