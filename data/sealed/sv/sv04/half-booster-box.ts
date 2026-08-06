import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "half-booster-box",
  set: "sv04",
  boosters: [
    {
      set: "sv04",
      packs: [
        {
          quantity: 18,
        },
      ],
      artworks: [
        "boo_sv04-armarouge",
        "boo_sv04-garchomp",
        "boo_sv04-iron-valiant",
        "boo_sv04-roaring-moon",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Paradox Rift Half Booster Box",
      releaseDate: "2023-11-03",
      thirdParty: {
        tcgplayer: "649417",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/649417_in_1000x1000.jpg",
        },
      ],
      description: "Each Half Booster Box contains 18 booster packs.",
    },
  ],
} satisfies SealedProductDef;
