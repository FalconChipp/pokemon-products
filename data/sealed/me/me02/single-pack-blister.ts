import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "single-pack-blister",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 1,
        },
      ],
      artworks: [
        "boo_me02-charizard",
        "boo_me02-gengar",
        "boo_me02-heracross",
        "boo_me02-lopunny",
      ],
    },
  ],
  accessories: [
    {
      category: "coin",
      quantity: 1,
      name: "Diancie",
    },
  ],
  variants: [
    {
      id: "cottonee",
      name: "Phantasmal Flames Single Pack Blister [Cottonee]",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654151",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654151_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-018",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
    {
      id: "whimsicott",
      name: "Phantasmal Flames Single Pack Blister [Whimsicott]",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654150",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654150_in_1000x1000.jpg",
        },
      ],
      contents: [
        {
          type: "promo-card",
          cards: [
            "mep-019",
          ],
        },
      ],
      description: "Each Single Pack Blister contains 1 booster pack, 1 promo card, and a coin.",
    },
  ],
} satisfies SealedProductDef;
