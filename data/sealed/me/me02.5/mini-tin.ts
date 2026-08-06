import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "mini-tin",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 2,
        },
      ],
      artworks: [
        "boo_me02.5-charizard",
        "boo_me02.5-dragonite",
        "boo_me02.5-ho-oh",
        "boo_me02.5-lucario",
        "boo_me02.5-mewtwo",
        "boo_me02.5-pikachu",
      ],
    },
  ],
  variants: [
    {
      id: "clefairy-and-chikorita",
      name: "Ascended Heroes Mini Tin [Clefairy & Chikorita]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "668535",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668535_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "pikachu-and-tepig",
      name: "Ascended Heroes Mini Tin [Pikachu & Tepig]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "668531",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668531_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "riolu-and-darumaka",
      name: "Ascended Heroes Mini Tin [Riolu & Darumaka]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "668532",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668532_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "togepi-and-totodile",
      name: "Ascended Heroes Mini Tin [Togepi & Totodile]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "668534",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668534_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "zorua-and-cramorant",
      name: "Ascended Heroes Mini Tin [Zorua & Cramorant]",
      releaseDate: "2026-02-20",
      thirdParty: {
        tcgplayer: "668533",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668533_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Ascended Heroes Mini Tin Display",
      thirdParty: {
        tcgplayer: "679556",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "variant",
          id: "clefairy-and-chikorita",
          quantity: 2,
        },
        {
          type: "variant",
          id: "pikachu-and-tepig",
          quantity: 2,
        },
        {
          type: "variant",
          id: "riolu-and-darumaka",
          quantity: 2,
        },
        {
          type: "variant",
          id: "togepi-and-totodile",
          quantity: 2,
        },
        {
          type: "variant",
          id: "zorua-and-cramorant",
          quantity: 2,
        },
      ],
    },
    {
      type: "display-case",
      id: "display-case",
      name: "Ascended Heroes Mini Tin Display Case",
      thirdParty: {
        tcgplayer: "689031",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "packaging",
          id: "display",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
