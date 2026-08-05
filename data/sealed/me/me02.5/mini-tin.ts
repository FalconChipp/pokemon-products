import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "mini-tin",
  set: "me02.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02.5",
        quantity: 2,
      },
    ],
  },
  variants: [
    {
      id: "clefairy-and-chikorita",
      name: "Ascended Heroes Mini Tin [Clefairy & Chikorita]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "668535",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668535_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "pikachu-and-tepig",
      name: "Ascended Heroes Mini Tin [Pikachu & Tepig]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "668531",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668531_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "riolu-and-darumaka",
      name: "Ascended Heroes Mini Tin [Riolu & Darumaka]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "668532",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668532_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "togepi-and-totodile",
      name: "Ascended Heroes Mini Tin [Togepi & Totodile]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "668534",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668534_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
    {
      id: "zorua-and-cramorant",
      name: "Ascended Heroes Mini Tin [Zorua & Cramorant]",
      releaseDate: "2026-02-20",
      identifiers: {
        tcgplayer: "668533",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668533_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Ascended Heroes Mini Tin Display",
      identifiers: {
        tcgplayer: "679556",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "sealed-product",
          variant: "clefairy-and-chikorita",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "pikachu-and-tepig",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "riolu-and-darumaka",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "togepi-and-totodile",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "zorua-and-cramorant",
          quantity: 2,
        },
      ],
    },
    {
      type: "display-case",
      id: "display-case",
      name: "Ascended Heroes Mini Tin Display Case",
      identifiers: {
        tcgplayer: "689031",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "sealed-product",
          packaging: "display",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
