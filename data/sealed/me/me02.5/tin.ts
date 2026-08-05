import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tin",
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
      id: "mega-emboar-ex",
      name: "Ascended Heroes Tin [Mega Emboar ex]",
      releaseDate: "2026-08-28",
      identifiers: {
        tcgplayer: "702496",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/702496_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-035",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
      status: "draft",
    },
    {
      id: "mega-feraligatr-ex",
      name: "Ascended Heroes Tin [Mega Feraligatr ex]",
      releaseDate: "2026-08-28",
      identifiers: {
        tcgplayer: "702497",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/702497_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-036",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
      status: "draft",
    },
    {
      id: "mega-meganium-ex",
      name: "Ascended Heroes Tin [Mega Meganium ex]",
      releaseDate: "2026-08-28",
      identifiers: {
        tcgplayer: "702498",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/702498_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-034",
          quantity: 1,
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Tin Case",
      identifiers: {
        tcgplayer: "702501",
      },
      releaseDate: "2026-08-28",
      contents: [
        {
          type: "sealed-product",
          variant: "mega-emboar-ex",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "mega-feraligatr-ex",
          quantity: 2,
        },
        {
          type: "sealed-product",
          variant: "mega-meganium-ex",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
