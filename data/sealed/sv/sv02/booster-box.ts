import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "sv02",
  boosters: [
    {
      set: "sv02",
      packs: [
        {
          quantity: 36,
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
      name: "Paldea Evolved Booster Box",
      releaseDate: "2023-06-09",
      thirdParty: {
        tcgplayer: "493975",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/493975_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Paldea Evolved Booster Box Case",
      thirdParty: {
        tcgplayer: "496905",
      },
      releaseDate: "2023-06-09",
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
