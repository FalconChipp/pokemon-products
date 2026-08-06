import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "sv04",
  boosters: [
    {
      set: "sv04",
      packs: [
        {
          quantity: 3,
        },
      ],
      artworks: [
        "boo_sv04-armarouge",
        "boo_sv04-garchomp",
        "boo_sv04-iron-valiant",
        "boo_sv04-roaring-moon",
      ],
    },
  ],
  variants: [
    {
      id: "3-pack-blister-arctibax",
      name: "Paradox Rift 3-Pack Blister [Arctibax]",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "513433",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/513433_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-064",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
    {
      id: "3-pack-blister-cetitan",
      name: "Paradox Rift 3-Pack Blister [Cetitan]",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "513434",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/513434_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-063",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
  ],
} satisfies SealedProductDef;
