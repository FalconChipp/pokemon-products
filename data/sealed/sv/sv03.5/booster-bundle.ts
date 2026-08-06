import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 6,
        },
      ],
      artworks: [
        "boo_sv03.5-charizard",
        "boo_sv03.5-venusaur",
        "boo_sv03.5-blastoise",
        "boo_sv03.5-mew",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "151 Booster Bundle",
      releaseDate: "2023-09-22",
      thirdParty: {
        tcgplayer: "502000",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502000_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "151 Booster Bundle Display",
      thirdParty: {
        tcgplayer: "513405",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
    {
      type: "case",
      id: "case",
      name: "151 Booster Bundle Case",
      thirdParty: {
        tcgplayer: "530105",
      },
      releaseDate: "2023-09-22",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 25,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
