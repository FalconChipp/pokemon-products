import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
  set: "sv03.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "sv03.5",
        quantity: 4,
      },
    ],
  },
  variants: [
    {
      id: "alakazam",
      name: "151: Alakazam ex Collection",
      releaseDate: "2023-10-06",
      identifiers: {
        tcgplayer: "502006",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502006_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "svp-050",
          quantity: 1,
        },
        {
          type: "promo-card",
          cards: [
            "sv03.5-063",
            "sv03.5-064",
          ],
          quantity: 2,
          stamp: "cosmos",
        },
      ],
      description: "Each 151: Alakazam ex Collection contains 4 Booster Packs and 3 promo cards.",
      status: "draft",
    },
    {
      id: "zapdos",
      name: "151: Zapdos ex Collection",
      releaseDate: "2023-10-06",
      identifiers: {
        tcgplayer: "502007",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502007_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv03.5-125",
            "svp-049",
          ],
          quantity: 2,
        },
        {
          type: "promo-card",
          card: "svp-049",
          quantity: 1,
          stamp: "jumbo",
        },
      ],
      description: "Each 151: Zapdos ex Collection contains 4 Booster Packs, 2 promo cards, and 1 jumbo card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "alakazam-case",
      name: "151 Alakazam ex Collection Case",
      identifiers: {
        tcgplayer: "518781",
      },
      releaseDate: "2023-10-06",
      contents: [
        {
          type: "sealed-product",
          variant: "alakazam",
          quantity: 6,
        },
      ],
    },
    {
      type: "case",
      id: "zapdos-case",
      name: "151 Zapdos ex Collection Case",
      identifiers: {
        tcgplayer: "518782",
      },
      releaseDate: "2023-10-06",
      contents: [
        {
          type: "sealed-product",
          variant: "zapdos",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
