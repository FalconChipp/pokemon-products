import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
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
      id: "emboar",
      name: "Ascended Heroes Mega Emboar ex Box",
      releaseDate: "2026-04-24",
      thirdParty: {
        tcgplayer: "672734",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672734_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-035",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "mep-035",
          ],
          stamp: "lenticular",
        },
      ],
      description: "Each Mega Emboar ex Box contains 4 Booster Packs, 1 promo card, and 1 jumbo lenticular card.",
    },
    {
      id: "feraligatr",
      name: "Ascended Heroes Mega Feraligatr ex Box",
      releaseDate: "2026-04-24",
      thirdParty: {
        tcgplayer: "672735",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672735_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-036",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "mep-036",
          ],
          stamp: "lenticular",
        },
      ],
      description: "Each Mega Feraligatr ex Box contains 4 Booster Packs, 1 promo card, and 1 jumbo lenticular card.",
    },
    {
      id: "meganium",
      name: "Ascended Heroes Mega Meganium ex Box",
      releaseDate: "2026-04-24",
      thirdParty: {
        tcgplayer: "672733",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672733_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-034",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "mep-034",
          ],
          stamp: "lenticular",
        },
      ],
      description: "Each Mega Meganium ex Box contains 4 Booster Packs, 1 promo card, and 1 jumbo lenticular card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Ascended Heroes Mega ex Box Case",
      thirdParty: {
        tcgplayer: "672737",
      },
      releaseDate: "2026-02-20",
      contents: [
        {
          type: "variant",
          id: "emboar",
          quantity: 2,
        },
        {
          type: "variant",
          id: "feraligatr",
          quantity: 2,
        },
        {
          type: "variant",
          id: "meganium",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
