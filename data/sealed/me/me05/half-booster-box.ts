import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 18,
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
      name: "Pitch Black Half Booster Box",
      releaseDate: "2026-07-17",
      thirdParty: {
        tcgplayer: "692940",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692940_in_1000x1000.jpg",
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
    },
  ],
} satisfies SealedProductDef;
