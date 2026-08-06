import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me04",
  boosters: [
    {
      set: "me04",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_me04-dragalge",
        "boo_me04-floette",
        "boo_me04-greninja",
        "boo_me04-pyroar",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Build & Battle Box",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "684454",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684454_in_1000x1000.jpg",
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "build-and-battle-display",
      name: "Chaos Rising Build & Battle Display",
      thirdParty: {
        tcgplayer: "684455",
      },
      releaseDate: "2026-05-22",
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
