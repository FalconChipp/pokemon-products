import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_me05-chandelure",
        "boo_me05-darkrai",
        "boo_me05-excadrill",
        "boo_me05-zeraora",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Pitch Black Build & Battle Box",
      releaseDate: "2026-07-17",
      thirdParty: {
        tcgplayer: "692946",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692946_in_1000x1000.jpg",
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Pitch Black Build & Battle Box Display",
      thirdParty: {
        tcgplayer: "693586",
      },
      releaseDate: "2026-07-17",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
