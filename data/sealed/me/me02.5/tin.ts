import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tin",
  set: "me02.5",
  boosters: [
    {
      set: "me02.5",
      packs: [
        {
          quantity: 4,
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
      id: "mega-emboar-ex",
      name: "Ascended Heroes Tin [Mega Emboar ex]",
      releaseDate: "2026-08-28",
      thirdParty: {
        tcgplayer: "702496",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/702496_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-035",
          ],
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
    },
    {
      id: "mega-feraligatr-ex",
      name: "Ascended Heroes Tin [Mega Feraligatr ex]",
      releaseDate: "2026-08-28",
      thirdParty: {
        tcgplayer: "702497",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/702497_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-036",
          ],
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
    },
    {
      id: "mega-meganium-ex",
      name: "Ascended Heroes Tin [Mega Meganium ex]",
      releaseDate: "2026-08-28",
      thirdParty: {
        tcgplayer: "702498",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/702498_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-034",
          ],
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Tin Case",
      thirdParty: {
        tcgplayer: "702501",
      },
      releaseDate: "2026-08-28",
      contents: [
        {
          type: "variant",
          id: "mega-emboar-ex",
          quantity: 2,
        },
        {
          type: "variant",
          id: "mega-feraligatr-ex",
          quantity: 2,
        },
        {
          type: "variant",
          id: "mega-meganium-ex",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
