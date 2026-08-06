import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv01",
  boosters: [
    {
      set: "sv01",
      packs: [
        {
          quantity: 36,
        },
      ],
      artworks: [
        "boo_sv01-koraidon",
        "boo_sv01-miraidon",
        "boo_sv01-gyarados",
        "boo_sv01-starters",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Booster Box",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "476452",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/476452_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Scarlet & Violet Booster Box Case",
      thirdParty: {
        tcgplayer: "476453",
      },
      releaseDate: "2023-03-21",
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
