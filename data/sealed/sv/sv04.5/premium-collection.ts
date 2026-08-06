import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "premium-collection",
  set: "sv04.5",
  boosters: [
    {
      set: "sv04.5",
      packs: [
        {
          quantity: 8,
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
      id: "quaquaval-ex",
      name: "Paldean Fates Premium Collection [Quaquaval ex]",
      releaseDate: "2024-01-26",
      thirdParty: {
        tcgplayer: "528082",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528082_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-082",
            "svp-083",
            "svp-084",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "svp-084",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 8 Booster Packs, 3 promo cards, and 1 jumbo card.",
    },
    {
      id: "meowscarada-ex",
      name: "Paldean Fates Premium Collection [Meowscarada ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528079",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528079_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-076",
            "svp-077",
            "svp-078",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "svp-078",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 8 Booster Packs, 3 promo cards, and 1 jumbo card.",
    },
    {
      id: "skeledirge-ex",
      name: "Paldean Fates Premium Collection [Skeledirge ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528080",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528080_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-079",
            "svp-080",
            "svp-081",
          ],
        },
        {
          type: "promo-card",
          cards: [
            "svp-081",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 8 Booster Packs, 3 promo cards, and 1 jumbo card.",
    },
    {
      id: "great-tusk-ex-and-iron-treads-ex-premium-collection",
      name: "Paldean Fates Great Tusk ex & Iron Treads ex Premium Collection",
      releaseDate: "2025-12-01",
      thirdParty: {
        tcgplayer: "665113",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/665113_in_1000x1000.jpg",
        },
      ],
      boosters: [
        {
          set: "sv04.5",
          packs: [
            {
              quantity: 11,
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
            "svp-073",
          ],
          stamp: "set-logo",
        },
        {
          type: "promo-card",
          cards: [
            "svp-072",
          ],
          stamp: "jumbo",
        },
      ],
      description: "Each Collection contains 11 Booster Packs, 4 promo cards, and 1 jumbo card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Paldean Fates Premium Collection Case",
      thirdParty: {
        tcgplayer: "693569",
      },
      releaseDate: "2024-01-26",
      contents: [
        {
          type: "variant",
          id: "meowscarada-ex",
          quantity: 2,
        },
        {
          type: "variant",
          id: "quaquaval-ex",
          quantity: 2,
        },
        {
          type: "variant",
          id: "skeledirge-ex",
          quantity: 2,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
