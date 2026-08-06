import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me05-chandelure",
        "boo_me05-darkrai",
        "boo_me05-excadrill",
        "boo_me05-zeraora",
      ],
    },
  ],
  variants: [
    {
      id: "slowpoke",
      name: "Pitch Black Single Pack Blister [Slowpoke]",
      thirdParty: {
        tcgplayer: "692955",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692955_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-086",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
  ],
} satisfies SealedProductDef;
