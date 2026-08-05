import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "build-and-battle-stadium",
  set: "sv03",
  variants: [
    {
      id: "standard",
      name: "Obsidian Flames Build & Battle Stadium",
      releaseDate: "2023-08-11",
      identifiers: {
        tcgplayer: "501267",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501267_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "booster",
          set: "sv03",
          quantity: 11,
        },
      ],
      description: "Each Build & Battle Stadium contains 2 Build & Battle Boxes, 3 Booster Packs, 121 Energy cards, 6 damage-counter dice, 1 competition-legal coin-flip die, 2 condition markers, and a box to hold everything.",
      status: "draft",
    },
  ],
} satisfies SealedProductDef;
