import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "poster-collection",
  set: "sv03.5",
  variants: [
    {
      id: "standard",
      name: "151 Poster Collection",
      releaseDate: "2023-09-22",
      identifiers: {
        tcgplayer: "502001",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502001_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03.5",
          quantity: 3,
        },
        {
          type: "promo-card",
          cards: [
            "svp-046",
            "svp-047",
            "svp-048",
          ],
          quantity: 3,
          stamp: "cosmos",
        },
      ],
      description: "Each 151 Poster Collection contains 3 Booster packs, 3 promo cards, and 1 poster",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "151 Poster Collection Case",
      identifiers: {
        tcgplayer: "502002",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
