import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tin",
  set: "sv04.5",
  variants: [
    {
      id: "charizard-ex",
      name: "Paldean Fates Tin [Charizard ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528056",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528056_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 4,
        },
        {
          type: "promo-card",
          card: "svp-074",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
      status: "draft",
    },
    {
      id: "great-tusk-ex",
      name: "Paldean Fates Tin [Great Tusk ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528057",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528057_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 5,
        },
        {
          type: "promo-card",
          card: "svp-072",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 5 Booster Packs and 1 promo card.",
      status: "draft",
    },
    {
      id: "iron-treads-ex",
      name: "Paldean Fates Tin [Iron Treads ex]",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "528058",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528058_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 4,
        },
        {
          type: "promo-card",
          card: "svp-073",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
      status: "draft",
    },
    {
      id: "tin-case",
      name: "Paldean Fates Tin Case",
      releaseDate: "2024-02-09",
      identifiers: {
        tcgplayer: "688258",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/688258_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
          quantity: 4,
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
