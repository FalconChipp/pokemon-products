import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-stadium",
  set: "sv01",
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Build & Battle Stadium",
      releaseDate: "2023-03-21",
      identifiers: {
        tcgplayer: "478257",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/478257_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv01",
          quantity: 11,
        },
      ],
      description: "Each Build & Battle Stadium contains 2 Build & Battle Boxes, 3 Booster Packs, 121 Energy cards, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 condition markers, and a box to hold everything.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
