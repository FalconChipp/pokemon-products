import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "triple-blister",
  set: "me05",
  boosters: [
    {
      set: "me05",
      packs: [
        {
          quantity: 3,
        },
      ],
      artworks: [
        "boo_me05-chandelure",
        "boo_me05-darkrai",
        "boo_me05-excadrill",
        "boo_me05-zeraora",
      ],
    },
  ],
  variants: [
    {
      id: "3-pack-blister-binacle",
      name: "Pitch Black 3-Pack Blister [Binacle]",
      releaseDate: "2026-07-17",
      thirdParty: {
        tcgplayer: "692938",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/692938_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-087",
          ],
        },
      ],
      description: "Each 3-Pack Blister contains 3 booster packs and a promo card.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "3-pack-blister-case",
      name: "Pitch Black 3-Pack Blister Case",
      thirdParty: {
        tcgplayer: "693589",
      },
      releaseDate: "2026-07-17",
      contents: [
        {
          type: "variant",
          id: "3-pack-blister-binacle",
          quantity: 24,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
