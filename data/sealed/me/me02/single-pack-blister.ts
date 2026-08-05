import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me02",
  base: {
    contents: [
      {
        type: "booster",
        set: "me02",
        quantity: 1,
      },
      {
        type: "accessory",
        category: "coin",
        quantity: 1,
        name: "Diancie",
        details: {
          size: "big",
        },
      },
    ],
  },
  variants: [
    {
      id: "cottonee",
      name: "Phantasmal Flames Single Pack Blister [Cottonee]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654151",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654151_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-018",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
    {
      id: "whimsicott",
      name: "Phantasmal Flames Single Pack Blister [Whimsicott]",
      releaseDate: "2025-11-14",
      identifiers: {
        tcgplayer: "654150",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654150_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          card: "mep-019",
          quantity: 1,
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
