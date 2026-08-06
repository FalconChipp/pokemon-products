import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 6,
        },
      ],
      artworks: [
        "boo_me05-chandelure",
        "boo_me05-darkrai",
        "boo_me05-excadrill",
        "boo_me05-zeraora",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Pitch Black Booster Bundle",
      releaseDate: "2026-07-17",
      thirdParty: {
        tcgplayer: "692942",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692942_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Pitch Black Booster Bundle Case",
      thirdParty: {
        tcgplayer: "692943",
      },
      releaseDate: "2026-07-17",
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
