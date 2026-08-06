import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-box",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_me03-clefable",
        "boo_me03-meowth",
        "boo_me03-starmie",
        "boo_me03-zygarde",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Perfect Order Build & Battle Box",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672400",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672400_in_1000x1000.jpg",
        },
      ],
      description: "Each Build & Battle Box contains a 40-card ready-to-play deck, 4 booster packs, 1 promo card, and a code card for Pokémon TCG Live.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Perfect Order Build & Battle Box Display",
      thirdParty: {
        tcgplayer: "690172",
      },
      releaseDate: "2026-03-27",
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
