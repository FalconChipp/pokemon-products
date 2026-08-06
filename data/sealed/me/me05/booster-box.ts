import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 36,
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
      name: "Pitch Black Booster Box",
      releaseDate: "2026-07-17",
      thirdParty: {
        tcgplayer: "692939",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692939_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Pitch Black Booster Box Case",
      thirdParty: {
        tcgplayer: "692941",
      },
      releaseDate: "2026-07-17",
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
