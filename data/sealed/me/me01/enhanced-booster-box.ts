import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "enhanced-booster-box",
  set: "me01",
  boosters: [
    {
      set: "me01",
      packs: [
        {
          quantity: 36,
        },
      ],
      artworks: [
        "boo_me01-gardevoir",
        "boo_me01-kangaskhan",
        "boo_me01-lucario",
        "boo_me01-venusaur",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Mega Evolution Enhanced Booster Box",
      releaseDate: "2025-09-26",
      thirdParty: {
        tcgplayer: "644300",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/644300_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me01-133",
          ],
          stamp: "set-logo",
        },
      ],
      description: "Each Enhanced Booster Box contains 36 booster packs and a promo card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "enhanced-booster-case",
      name: "Mega Evolution Enhanced Booster Case",
      thirdParty: {
        tcgplayer: "646173",
      },
      releaseDate: "2025-09-26",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
