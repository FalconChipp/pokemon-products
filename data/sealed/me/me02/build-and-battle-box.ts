import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me02",
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Build & Battle Box",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "662725",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/662725_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02",
          quantity: 4,
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
      name: "Phantasmal Flames Build & Battle Box Display",
      identifiers: {
        tcgplayer: "654164",
      },
      releaseDate: "2025-11-14",
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
