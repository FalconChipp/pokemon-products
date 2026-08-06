import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me04",
  boosters: [
    {
      set: "me04",
      packs: [
        {
          quantity: 36,
        },
      ],
      artworks: [
        "boo_me04-dragalge",
        "boo_me04-floette",
        "boo_me04-greninja",
        "boo_me04-pyroar",
      ],
    },
  ],
  variants: [
    {
      id: "standard",
      name: "Chaos Rising Booster Box",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "684444",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684444_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Chaos Rising Booster Box Case",
      thirdParty: {
        tcgplayer: "684445",
      },
      releaseDate: "2026-05-22",
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
