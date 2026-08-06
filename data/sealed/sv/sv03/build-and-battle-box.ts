import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "sv03",
  boosters: [
    {
      set: "sv03",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_sv03-charizard",
        "boo_sv03-tyranitar",
        "boo_sv03-dragonite",
        "boo_sv03-revavroom",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Build & Battle Box",
      releaseDate: "2023-08-11",
      thirdParty: {
        tcgplayer: "501268",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501268_in_1000x1000.jpg",
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Obsidian Flames Build & Battle Box Display",
      thirdParty: {
        tcgplayer: "514193",
      },
      releaseDate: "2023-08-11",
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
