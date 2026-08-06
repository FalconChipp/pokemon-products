import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me03",
  boosters: [
    {
      set: "me03",
      packs: [
        {
          quantity: 3,
        },
      ],
      artworks: [
        "boo_me03-clefable",
        "boo_me03-meowth",
        "boo_me03-starmie",
        "boo_me03-zygarde",
      ],
    },
  ],
  variants: [
    {
      id: "3-pack-blister-chikorita",
      name: "Perfect Order 3-Pack Blister [Chikorita]",
      releaseDate: "2026-03-27",
      thirdParty: {
        tcgplayer: "672393",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/672393_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-069",
          ],
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
  ],
} satisfies SealedProductDef;
