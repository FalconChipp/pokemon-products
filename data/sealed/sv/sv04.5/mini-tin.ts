import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "mini-tin",
  set: "sv04.5",
  boosters: [
    {
      set: "sv04.5",
      packs: [
        {
          quantity: 2,
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
      id: "finizen",
      name: "Paldean Fates Mini Tin [Finizen]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528055",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528055_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "flamigo",
      name: "Paldean Fates Mini Tin [Flamigo]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528050",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528050_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "maushold",
      name: "Paldean Fates Mini Tin [Maushold]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528051",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528051_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
    {
      id: "tinkatink",
      name: "Paldean Fates Mini Tin [Tinkatink]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528052",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528052_in_1000x1000.jpg",
        },
      ],
      description: "Each Mini Tin contains 2 booster packs and an art card.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Paldean Fates Mini Tin Display",
      thirdParty: {
        tcgplayer: "528047",
      },
      releaseDate: "2024-02-09",
      contents: [
        {
          type: "variant",
          id: "finizen",
          quantity: 3,
        },
        {
          type: "variant",
          id: "flamigo",
          quantity: 3,
        },
        {
          type: "variant",
          id: "maushold",
          quantity: 3,
        },
        {
          type: "variant",
          id: "tinkatink",
          quantity: 3,
        },
      ],
    },
    {
      type: "display-case",
      id: "display-case",
      name: "Paldean Fates Mini Tin Display Case",
      thirdParty: {
        tcgplayer: "693612",
      },
      releaseDate: "2024-02-09",
      contents: [
        {
          type: "packaging",
          id: "display",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
