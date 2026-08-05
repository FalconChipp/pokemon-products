import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me04",
  base: {
    contents: [
      {
        type: "booster",
        set: "me04",
        quantity: 1,
      },
    ],
  },
  variants: [
    {
      id: "reshiram-moltres",
      name: "Chaos Rising Single Pack Blister [Reshiram/Moltres]",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "696150",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/696150_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me02-014",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "me02-017",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 2 promo cards.",
      status: "draft",
    },
    {
      id: "toxel",
      name: "Chaos Rising Single Pack Blister [Toxel]",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "684457",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684457_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-078",
          quantity: 1,
        },
        {
          type: "accessory",
          category: "coin",
          quantity: 1,
          details: {
            size: "big",
          },
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "zacian-mimikyu",
      name: "Chaos Rising Single Pack Blister [Zacian/Mimikyu]",
      releaseDate: "2026-05-22",
      identifiers: {
        tcgplayer: "696144",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/696144_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "me02-042",
          quantity: 1,
        },
        {
          type: "promo-card",
          card: "me02-045",
          quantity: 1,
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 2 promo cards.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
