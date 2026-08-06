import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 6,
        },
      ],
      artworks: [
        "boo_me03-clefable",
        "boo_me03-meowth",
        "boo_me03-starmie",
        "boo_me03-zygarde",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Perfect Order Booster Bundle",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672396",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672396_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Perfect Order Booster Bundle Case",
      thirdParty: {
        tcgplayer: "672397",
      },
      releaseDate: "2026-03-27",
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
