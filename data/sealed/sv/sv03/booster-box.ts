import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv03",
  boosters: [
    {
      set: "sv03",
      packs: [
        {
          quantity: 36,
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
      id: "standard",
      name: "Obsidian Flames Booster Box",
      releaseDate: "2023-08-11",
      thirdParty: {
        tcgplayer: "501257",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/501257_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Obsidian Flames Booster Box Case",
      thirdParty: {
        tcgplayer: "501258",
      },
      releaseDate: "2023-08-11",
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
