import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "tin",
  set: "sv04.5",
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
  variants: [
    {
      id: "charizard-ex",
      name: "Paldean Fates International Tin [Charizard ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528063",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528063_in_1000x1000.jpg",
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
      description: "Each Tin contains 5 Booster Packs and 1 promo card.",
    },
    {
      id: "great-tusk-ex",
      name: "Paldean Fates International Tin [Great Tusk ex]",
      releaseDate: "2024-02-09",
      thirdParty: {
        tcgplayer: "528060",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/528060_in_1000x1000.jpg",
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
  ],
} satisfies SealedProductDef;
