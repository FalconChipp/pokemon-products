import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "mini-tin",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me01-gardevoir",
        "boo_me01-kangaskhan",
        "boo_me01-lucario",
        "boo_me01-venusaur",
      ],
    },
    {
      set: "sv10",
      packs: [
        {
          quantity: 1,
        },
      ],
    },
  ],
  accessories: [
    {
      category: "sticker",
      quantity: 1,
    },
    {
      category: "art-card",
      quantity: 1,
    },
  ],
  variants: [
    {
      id: "mega-gardevoir",
      name: "Mega Heroes Mini Tin [Mega Gardevoir]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "649394",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649394_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "mega-kangaskhan",
      name: "Mega Heroes Mini Tin [Mega Kangaskhan]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "649395",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649395_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "mega-latias",
      name: "Mega Heroes Mini Tin [Mega Latias]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "649397",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649397_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "mega-lucario",
      name: "Mega Heroes Mini Tin [Mega Lucario]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "649400",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649400_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "mega-venusaur",
      name: "Mega Heroes Mini Tin [Mega Venusaur]",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "649401",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649401_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Mega Heroes Mini Tin Display",
      thirdParty: {
        tcgplayer: "649392",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "variant",
          id: "mega-gardevoir",
          quantity: 2,
        },
        {
          type: "variant",
          id: "mega-kangaskhan",
          quantity: 2,
        },
        {
          type: "variant",
          id: "mega-latias",
          quantity: 2,
        },
        {
          type: "variant",
          id: "mega-lucario",
          quantity: 2,
        },
        {
          type: "variant",
          id: "mega-venusaur",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
