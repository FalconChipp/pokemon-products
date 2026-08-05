import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv04.5",
  variants: [
    {
      id: "standard",
      name: "Paldean Fates Booster Bundle",
      releaseDate: "2024-02-23",
      identifiers: {
        tcgplayer: "528771",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528771_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv04.5",
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
      name: "Paldean Fates Booster Bundle Display",
      identifiers: {
        tcgplayer: "530704",
      },
      releaseDate: "2023-02-23",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 10,
        },
      ],
    },
    {
      type: "display-case",
      id: "display-case",
      name: "Paldean Fates Booster Bundle Display Case",
      identifiers: {
        tcgplayer: "635609",
      },
      releaseDate: "2024-02-09",
      contents: [
        {
          type: "sealed-product",
          variant: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
