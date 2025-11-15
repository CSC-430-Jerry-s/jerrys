// src/app/data/shopData.js

// All seasonal collections
export const collections = [
  {
    id: "fall-2025",
    seasonLabel: "FALL 2025",
    name: "URBAN DECAY",
    tagline: '"Concrete Jungle Chronicles"',
    items: 24,
    status: "live",
  },
  {
    id: "summer-2025",
    seasonLabel: "SUMMER 2025",
    name: "HEAT WAVE",
    tagline: '"Sun-Soaked Streets"',
    items: 18,
    status: "sold",
  },
  {
    id: "spring-2025",
    seasonLabel: "SPRING 2025",
    name: "REBIRTH",
    tagline: '"Fresh Starts, Bold Moves"',
    items: 21,
    status: "live",
  },
  {
    id: "winter-2024",
    seasonLabel: "WINTER 2024",
    name: "FROST BITE",
    tagline: '"Cold Days, Hot Fits"',
    items: 16,
    status: "live",
  },
  {
    id: "fall-2024",
    seasonLabel: "FALL 2024",
    name: "DYSTOPIA",
    tagline: '"When the Leaves Fall"',
    items: 19,
    status: "sold",
  },
  {
    id: "summer-2024",
    seasonLabel: "SUMMER 2024",
    name: "NEON NIGHTS",
    tagline: '"City Lights, Summer Vibes"',
    items: 22,
    status: "live",
  },
];

// Dummy products for each collection
export const productsByCollection = {
  "fall-2025": [
    {
      id: "distressed-puffer",
      name: "Distressed Puffer",
      price: 245,
      emoji: "🧥",
      shortDescription:
        "Oversized sherpa-lined puffer with distressed finish and water-resistant shell.",
    },
    {
      id: "urban-hoodie",
      name: "Urban Essentials Hoodie",
      price: 110,
      emoji: "🧥",
      shortDescription: "Heavyweight fleece hoodie with subtle front logo hit.",
    },
  ],
  "summer-2025": [
    {
      id: "heatwave-tank",
      name: "Heatwave Tank",
      price: 55,
      emoji: "👕",
      shortDescription: "Boxy tank with sun-fade wash and minimal branding.",
    },
  ],
  "spring-2025": [
    {
      id: "rebirth-crewneck",
      name: "Rebirth Crewneck",
      price: 95,
      emoji: "👕",
      shortDescription: "Midweight crewneck with tonal puff-print graphic.",
    },
  ],
  "winter-2024": [
    {
      id: "frostbite-parka",
      name: "Frost Bite Parka",
      price: 260,
      emoji: "🧥",
      shortDescription: "Longline parka with faux-fur hood and hidden pocketing.",
    },
  ],
  "fall-2024": [
    {
      id: "dystopia-flannel",
      name: "Dystopia Flannel",
      price: 85,
      emoji: "👕",
      shortDescription: "Heavy flannel shirt with dark plaid pattern.",
    },
  ],
  "summer-2024": [
    {
      id: "neon-nights-tee",
      name: "Neon Nights Tee",
      price: 45,
      emoji: "👕",
      shortDescription: "Glow-in-the-dark front graphic, boxy fit.",
    },
    {
      id: "city-mesh-shorts",
      name: "City Mesh Shorts",
      price: 60,
      emoji: "🩳",
      shortDescription: "Double-layer mesh shorts with 5\" inseam.",
    },
  ],
};

// Helper to find a product by id (for product detail)
export function findProductById(productId) {
  for (const [collectionId, products] of Object.entries(productsByCollection)) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      return { ...product, collectionId };
    }
  }
  return null;
}
