import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Build & Battle Box",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501268",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501268_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
          quantity: 4,
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
      name: "Obsidian Flames Build & Battle Box Display",
      identifiers: {
        tcgplayer: "514193",
      },
      releaseDate: "2023-08-11",
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
