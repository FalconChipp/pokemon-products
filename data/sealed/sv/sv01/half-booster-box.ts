import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "sv01",
  boosters: [
    {
      set: "sv01",
      packs: [
        {
          quantity: 18,
        },
      ],
      artworks: [
        "boo_sv01-koraidon",
        "boo_sv01-miraidon",
        "boo_sv01-gyarados",
        "boo_sv01-starters",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Scarlet & Violet Half Booster Box",
      releaseDate: "2023-03-21",
      thirdParty: {
        tcgplayer: "649407",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649407_in_1000x1000.jpg",
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
    },
  ],
} satisfies SealedProductDef;
