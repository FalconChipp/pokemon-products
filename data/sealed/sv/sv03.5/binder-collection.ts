import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "binder-collection",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 4,
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
      name: "151 Binder Collection",
      releaseDate: "2023-09-22",
      thirdParty: {
        tcgplayer: "502004",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502004_in_1000x1000.jpg",
        },
      ],
      description: "Each 151 Binder Collection contains 4 Booster Packs and a binder with 20 9-pocket pages.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "151 Binder Collection Case",
      thirdParty: {
        tcgplayer: "502003",
      },
      releaseDate: "2023-09-22",
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
