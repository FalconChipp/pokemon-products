import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv02",
  boosters: [
    {
      set: "sv02",
      packs: [
        {
          quantity: 6,
        },
      ],
      artworks: [
        "boo_sv02-meowscarada",
        "boo_sv02-skeledirge",
        "boo_sv02-quaquaval",
        "boo_sv02-chien-pao",
        "boo_sv02-ting-lu",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Paldea Evolved Booster Bundle",
      releaseDate: "2023-06-09",
      thirdParty: {
        tcgplayer: "496914",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/496914_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Paldea Evolved Booster Bundle Case",
      thirdParty: {
        tcgplayer: "656928",
      },
      releaseDate: "2023-06-09",
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
