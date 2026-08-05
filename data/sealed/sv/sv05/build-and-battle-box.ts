import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "sv05",
  variants: [
    {
      id: "standard",
      name: "Temporal Forces Build & Battle Box",
      releaseDate: "2024-03-22",
      identifiers: {
        tcgplayer: "537411",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/537411_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv05",
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
      name: "Temporal Forces Build & Battle Box Display",
      identifiers: {
        tcgplayer: "537409",
      },
      releaseDate: "2024-03-22",
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
