import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me01",
  variants: [
    {
      id: "golduck",
      name: "Mega Evolution 3-Pack Blister [Golduck]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644356",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644356_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "mep-008",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
    {
      id: "psyduck",
      name: "Mega Evolution 3-Pack Blister [Psyduck]",
      releaseDate: "2025-09-26",
      identifiers: {
        tcgplayer: "644357",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644357_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me01",
          quantity: 3,
          assortment: "fixed",
        },
        {
          type: "promo-card",
          card: "mep-007",
          quantity: 1,
        },
      ],
      description: "Each Triple Blister contains 3 booster packs and one promo card.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
