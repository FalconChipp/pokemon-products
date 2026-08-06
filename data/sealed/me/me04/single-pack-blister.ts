import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me04",
  boosters: [
    {
      set: "me04",
      packs: [
        {
          quantity: 1,
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
      id: "reshiram-moltres",
      name: "Chaos Rising Single Pack Blister [Reshiram/Moltres]",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "696150",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/696150_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02-014",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "me02-017",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 2 promo cards.",
    },
    {
      id: "toxel",
      name: "Chaos Rising Single Pack Blister [Toxel]",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "684457",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/684457_in_1000x1000.jpg",
        },
      ],
      accessories: [
        {
          category: "coin",
          quantity: 1,
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-078",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "zacian-mimikyu",
      name: "Chaos Rising Single Pack Blister [Zacian/Mimikyu]",
      releaseDate: "2026-05-22",
      thirdParty: {
        tcgplayer: "696144",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/696144_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "me02-042",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "me02-045",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack and 2 promo cards.",
    },
  ],
} satisfies SealedProductDef;
