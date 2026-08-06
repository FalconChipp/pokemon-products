import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me03-clefable",
        "boo_me03-meowth",
        "boo_me03-starmie",
        "boo_me03-zygarde",
      ],
    },
  ],
  accessories: [
    {
      category: "coin",
      quantity: 1,
    },
  ],
  variants: [
    {
      id: "makuhita",
      name: "Perfect Order Single Pack Blister [Makuhita]",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672410",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672410_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-068",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
  ],
} satisfies SealedProductDef;
