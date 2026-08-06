import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-bundle",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 6,
        },
      ],
      artworks: [
        "boo_me02.5-charizard",
        "boo_me02.5-dragonite",
        "boo_me02.5-ho-oh",
        "boo_me02.5-lucario",
        "boo_me02.5-mewtwo",
        "boo_me02.5-pikachu",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Ascended Heroes Booster Bundle",
      releaseDate: "2026-04-24",
      thirdParty: {
        tcgplayer: "668541",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/668541_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Bundle contains 6 booster packs.",
    },
  ],
  packaging: [
    {
      type: "display",
      id: "display",
      name: "Ascended Heroes Booster Bundle Display",
      releaseDate: "2026-04-24",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 10,
        },
      ],
    },
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Booster Bundle Case",
      thirdParty: {
        tcgplayer: "681339",
      },
      releaseDate: "2026-04-24",
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
