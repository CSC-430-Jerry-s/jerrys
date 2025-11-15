// app/data/shopData.js

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

// Products keyed by collection id
export const productsByCollection = {
  "fall-2025": [
    {
      id: "distressed-puffer",
      name: "Distressed Puffer",
      price: 245,
      emoji: "🧥",
      shortDescription: "Oversized sherpa-lined puffer with distressed finish.",
    },
    {
      id: "urban-hoodie",
      name: "Urban Essentials Hoodie",
      price: 110,
      emoji: "🧥",
      shortDescription: "Heavyweight fleece hoodie with subtle logo hit.",
    },
  ],
  "summer-2024": [
    {
      id: "neon-tee",
      name: "Neon Nights Tee",
      price: 45,
      emoji: "👕",
      shortDescription: "Boxy-fit tee with glow-in-the-dark graphic.",
    },
    {
      id: "mesh-shorts",
      name: "City Mesh Shorts",
      price: 60,
      emoji: "🩳",
      shortDescription: "Double-layer mesh shorts with 5\" inseam.",
    },
  ],
  
};

// Helper to find a product by id (for product detail + cart)
export function findProductById(productId) {
  for (const [collectionId, products] of Object.entries(productsByCollection)) {
    const product = products.find((p) => p.id === productId);
    if (product) {
      return { ...product, collectionId };
    }
  }
  return null;
}
