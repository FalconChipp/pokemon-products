import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 18,
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
      name: "Perfect Order Half Booster Box",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672403",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672403_in_1000x1000.jpg",
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
    },
  ],
} satisfies SealedProductDef;
