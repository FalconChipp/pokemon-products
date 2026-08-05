import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "sv02",
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Build & Battle Box",
      releaseDate: "2023-06-09",
      identifiers: {
        tcgplayer: "496929",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/496929_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv02",
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
      name: "Paldea Evolved Build & Battle Box Display",
      identifiers: {
        tcgplayer: "496931",
      },
      releaseDate: "2023-06-09",
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
