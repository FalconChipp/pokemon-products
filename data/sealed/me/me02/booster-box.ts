import type { SealedProductDef } from "../../../../types/sealed";

export default {
  category: "booster-box",
  set: "me02",
  boosters: [
    {
      set: "me02",
      packs: [
        {
          quantity: 36,
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
  variants: [
    {
      id: "standard",
      name: "Phantasmal Flames Booster Box",
      releaseDate: "2025-11-14",
      thirdParty: {
        tcgplayer: "654137",
      },
      images: [
        {
          type: "front",
          url: "https://tcgplayer-cdn.tcgplayer.com/product/654137_in_1000x1000.jpg",
        },
      ],
      description: "Each Booster Box contains 36 booster packs.",
    },
  ],
  packaging: [
    {
      type: "case",
      id: "case",
      name: "Phantasmal Flames Booster Box Case",
      thirdParty: {
        tcgplayer: "655281",
      },
      releaseDate: "2025-11-14",
      contents: [
        {
          type: "variant",
          id: "standard",
          quantity: 6,
        },
      ],
    },
  ],
} satisfies SealedProductDef;
