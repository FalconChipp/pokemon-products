import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "sv04.5",
  boosters: [
    {
      set: "sv04.5",
      packs: [
        {
          quantity: 6,
        },
      ],
      artworks: [
        "boo_sv04.5-pikachu",
        "boo_sv04.5-tinkaton",
        "boo_sv04.5-ceruledge",
        "boo_sv04.5-dondozo",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Paldean Fates Booster Bundle",
      releaseDate: "2024-02-23",
      thirdParty: {
        tcgplayer: "528771",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528771_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Paldean Fates Booster Bundle Display",
      thirdParty: {
        tcgplayer: "530704",
      },
      releaseDate: "2023-02-23",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
    {
      type: "display-case",
      id: "display-case",
      name: "Paldean Fates Booster Bundle Display Case",
      thirdParty: {
        tcgplayer: "635609",
      },
      releaseDate: "2024-02-09",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
