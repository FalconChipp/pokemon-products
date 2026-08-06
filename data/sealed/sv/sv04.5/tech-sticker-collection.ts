import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tech-sticker-collection",
  set: "sv04.5",
  boosters: [
    {
      set: "sv04.5",
      packs: [
        {
          quantity: 3,
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
      id: "fidough",
      name: "Paldean Fates Tech Sticker Collection [Fidough]",
      releaseDate: "2024-01-26",
      thirdParty: {
        tcgplayer: "528043",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528043_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-069",
          ],
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
    },
    {
      id: "greavard",
      name: "Paldean Fates Tech Sticker Collection [Greavard]",
      releaseDate: "2024-01-26",
      thirdParty: {
        tcgplayer: "528045",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528045_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-070",
          ],
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
    },
    {
      id: "maschiff",
      name: "Paldean Fates Tech Sticker Collection [Maschiff]",
      releaseDate: "2024-01-26",
      thirdParty: {
        tcgplayer: "528044",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528044_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "svp-071",
          ],
        },
      ],
      description: "Each Tech Sticker Collection contains 3 Booster Packs, 1 promo card, and stickers.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Paldean Fates Tech Sticker Collection Case",
      thirdParty: {
        tcgplayer: "654599",
      },
      releaseDate: "2024-01-26",
      contents: [
        {
          type: "variant",
          id: "fidough",
          quantity: 4,
        },
        {
          type: "variant",
          id: "greavard",
          quantity: 4,
        },
        {
          type: "variant",
          id: "maschiff",
          quantity: 4,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
