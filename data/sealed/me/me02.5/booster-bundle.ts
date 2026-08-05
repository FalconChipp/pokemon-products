import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me02.5",
  variants: [
    {
      id: "standard",
      name: "Ascended Heroes Booster Bundle",
      releaseDate: "2026-04-24",
      identifiers: {
        tcgplayer: "668541",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668541_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "me02.5",
          quantity: 6,
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
      status: "draft",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Ascended Heroes Booster Bundle Display",
      releaseDate: "2026-04-24",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 10,
        },
      ],
    },
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Booster Bundle Case",
      identifiers: {
        tcgplayer: "681339",
      },
      releaseDate: "2026-04-24",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 25,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
