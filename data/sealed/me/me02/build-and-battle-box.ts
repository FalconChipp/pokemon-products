import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_me02-charizard",
        "boo_me02-gengar",
        "boo_me02-heracross",
        "boo_me02-lopunny",
      ],
    },
  ],
  accessories: [
    {
      category: "deck",
      quantity: 1,
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Build & Battle Box",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "662725",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/662725_in_1000x1000.jpg",
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Phantasmal Flames Build & Battle Box Display",
      thirdParty: {
        tcgplayer: "654164",
      },
      releaseDate: "2025-11-14",
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
