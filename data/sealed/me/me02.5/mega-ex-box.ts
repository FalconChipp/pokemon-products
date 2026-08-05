import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
  set: "me02.5",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02.5",
        quantity: 4,
      },
    ],
  },
  variants: [
    {
      id: "emboar",
      name: "Ascended Heroes Mega Emboar ex Box",
      releaseDate: "2026-04-24",
      identifiers: {
        tcgplayer: "672734",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672734_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-035",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "mep-035",
          quantity: 1,
          stamp: "lenticular",
        },
      ],
      description: "Each Mega Emboar ex Box contains 4 Booster Packs, 1 promo card, and 1 jumbo lenticular card.",
      status: "draft",
    },
    {
      id: "feraligatr",
      name: "Ascended Heroes Mega Feraligatr ex Box",
      releaseDate: "2026-04-24",
      identifiers: {
        tcgplayer: "672735",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672735_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-036",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "mep-036",
          quantity: 1,
          stamp: "lenticular",
        },
      ],
      description: "Each Mega Feraligatr ex Box contains 4 Booster Packs, 1 promo card, and 1 jumbo lenticular card.",
      status: "draft",
    },
    {
      id: "meganium",
      name: "Ascended Heroes Mega Meganium ex Box",
      releaseDate: "2026-04-24",
      identifiers: {
        tcgplayer: "672733",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672733_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-034",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "mep-034",
          quantity: 1,
          stamp: "lenticular",
        },
      ],
      description: "Each Mega Meganium ex Box contains 4 Booster Packs, 1 promo card, and 1 jumbo lenticular card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Mega ex Box Case",
      identifiers: {
        tcgplayer: "672737",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "sealed-product",
          variant: "emboar",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "feraligatr",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "meganium",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
