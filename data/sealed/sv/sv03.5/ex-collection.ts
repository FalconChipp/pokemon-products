import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "collection-box",
  set: "sv03.5",
  boosters: [
    {
      set: "sv03.5",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_sv03.5-charizard",
        "boo_sv03.5-venusaur",
        "boo_sv03.5-blastoise",
        "boo_sv03.5-mew",
      ],
    },
  ],
  variants: [
    {
      id: "alakazam",
      name: "151: Alakazam ex Collection",
      releaseDate: "2023-10-06",
      thirdParty: {
        tcgplayer: "502006",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502006_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-050",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "sv03.5-063",
            "sv03.5-064",
          ],
          stamp: "cosmos",
        },
      ],
      description: "Each 151: Alakazam ex Collection contains 4 Booster Packs and 3 promo cards.",
    },
    {
      id: "zapdos",
      name: "151: Zapdos ex Collection",
      releaseDate: "2023-10-06",
      thirdParty: {
        tcgplayer: "502007",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/502007_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "sv03.5-125",
            "svp-049",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "svp-049",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each 151: Zapdos ex Collection contains 4 Booster Packs, 2 promo cards, and 1 jumbo card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "alakazam-case",
      name: "151 Alakazam ex Collection Case",
      thirdParty: {
        tcgplayer: "518781",
      },
      releaseDate: "2023-10-06",
      contents: [
        {
          type: "variant",
          id: "alakazam",
          quantity: 6,
        },
      ],
    },
    {
      type: "case",
      id: "zapdos-case",
      name: "151 Zapdos ex Collection Case",
      thirdParty: {
        tcgplayer: "518782",
      },
      releaseDate: "2023-10-06",
      contents: [
        {
          type: "variant",
          id: "zapdos",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
