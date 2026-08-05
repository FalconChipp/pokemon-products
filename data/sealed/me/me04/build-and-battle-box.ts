import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me04",
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Build & Battle Box",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684454",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684454_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me04",
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
      id: "build-and-battle-display",
      name: "Chaos Rising Build & Battle Display",
      identifiers: {
        tcgplayer: "684455",
      },
      releaseDate: "2026-05-22",
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
