import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 36,
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
      name: "Perfect Order Booster Box",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672394",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672394_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Perfect Order Booster Box Case",
      thirdParty: {
        tcgplayer: "672395",
      },
      releaseDate: "2026-03-27",
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
