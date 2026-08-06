import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tin",
  set: "sv04.5",
  boosters: [
    {
      set: "sv04.5",
      packs: [
        {
          quantity: 4,
        },
      ],
      artworks: [
        "boo_sv04.5-pikachu",
        "boo_sv04.5-tinkaton",
        "boo_sv04.5-ceruledge",
        "boo_sv04.5-dondozo",
      ],
    },
  ],
  variants: [
    {
      id: "charizard-ex",
      name: "Paldean Fates Tin [Charizard ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528056",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528056_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-074",
          ],
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
    },
    {
      id: "great-tusk-ex",
      name: "Paldean Fates Tin [Great Tusk ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528057",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528057_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv04.5",
          packs: [
            {
              quantity: 5,
            },
          ],
          artworks: [
            "boo_sv04.5-pikachu",
            "boo_sv04.5-tinkaton",
            "boo_sv04.5-ceruledge",
            "boo_sv04.5-dondozo",
          ],
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-072",
          ],
        },
      ],
      description: "Each Tin contains 5 Booster Packs and 1 promo card.",
    },
    {
      id: "iron-treads-ex",
      name: "Paldean Fates Tin [Iron Treads ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528058",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528058_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-073",
          ],
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
    },
    {
      id: "tin-case",
      name: "Paldean Fates Tin Case",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "688258",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/688258_in_1000x1000.jpg",
        },
      ],
      description: "Each Tin contains 4 Booster Packs and 1 promo card.",
    },
  ],
} satisfies SealedProductDef;
