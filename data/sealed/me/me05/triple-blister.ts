import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me05",
  variants: [
    {
      id: "3-pack-blister-binacle",
      name: "Pitch Black 3-Pack Blister [Binacle]",
      releaseDate: "2026-07-17",
      identifiers: {
        tcgplayer: "692938",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692938_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me05",
          quantity: 3,
        },
        {
          type: "promo-card",
          card: "mep-087",
          quantity: 1,
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "3-pack-blister-case",
      name: "Pitch Black 3-Pack Blister Case",
      identifiers: {
        tcgplayer: "693589",
      },
      releaseDate: "2026-07-17",
      contents: [
        {
          type: "sealed-product",
          variant: "3-pack-blister-binacle",
          quantity: 24,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
