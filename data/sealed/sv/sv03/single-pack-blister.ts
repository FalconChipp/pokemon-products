import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "sv03",
  boosters: [
    {
      set: "sv03",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_sv03-charizard",
        "boo_sv03-tyranitar",
        "boo_sv03-dragonite",
        "boo_sv03-revavroom",
      ],
    },
  ],
  variants: [
    {
      id: "paldean-wooper",
      name: "Obsidian Flames Single Pack Blister [Paldean Wooper]",
      releaseDate: "2023-08-11",
      thirdParty: {
        tcgplayer: "512047",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/512047_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-041",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "pawmi",
      name: "Obsidian Flames Single Pack Blister [Pawmi]",
      releaseDate: "2023-08-11",
      thirdParty: {
        tcgplayer: "501262",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501262_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-040",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
  ],
} satisfies SealedProductDef;
