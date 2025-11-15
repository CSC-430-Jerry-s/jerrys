// src/data/catalog.js

export const SEASONS = [
  {
    id: "fall-2024",
    name: "Fall 2024",
    title: "Urban Essentials",
    tagline: "Muted neutrals, bold silhouettes, city-ready layers.",
    status: "LIVE",
  },
  {
    id: "winter-2024",
    name: "Winter 2024",
    title: "Glacial Noise",
    tagline: "Cold tones, heavy fabrics, metal hardware.",
    status: "COMING SOON",
  },
  {
    id: "summer-2024",
    name: "Summer 2024",
    title: "Heat Wave",
    tagline: "Sun-bleached colors and loose fits.",
    status: "ARCHIVED",
  },
];

export const PRODUCTS = [
  // Fall 2024
  {
    id: "fall24-boxy-logo-tee-black",
    seasonId: "fall-2024",
    name: "Boxy Logo Tee",
    color: "Black",
    price: 40,
    image: "https://via.placeholder.com/400x500?text=Boxy+Logo+Tee",
    description:
      "Oversized, boxy tee with JERRY'S front logo. Midweight cotton for everyday wear.",
    details: [
      "100% cotton, 240 GSM",
      "Slightly dropped shoulder",
      "Screenprinted graphic",
      "Unisex fit",
    ],
  },
  {
    id: "fall24-heavy-hoodie-bone",
    seasonId: "fall-2024",
    name: "Heavyweight Hoodie",
    color: "Bone",
    price: 85,
    image: "https://via.placeholder.com/400x500?text=Heavyweight+Hoodie",
    description:
      "Thick, brushed fleece hoodie with minimal logo embroidery on the chest.",
    details: [
      "80% cotton / 20% polyester",
      "Double-layered hood",
      "Kangaroo pocket",
      "Relaxed fit",
    ],
  },
  {
    id: "fall24-utility-cargo-olive",
    seasonId: "fall-2024",
    name: "Utility Cargo Pants",
    color: "Olive",
    price: 90,
    image: "https://via.placeholder.com/400x500?text=Utility+Cargos",
    description:
      "Tapered cargos with adjustable cuffs and oversized pockets for a functional street look.",
    details: [
      "Durable cotton twill",
      "Adjustable ankle toggles",
      "Multiple utility pockets",
      "Slight taper from knee to ankle",
    ],
  },

  // Winter 2024
  {
    id: "winter24-puffer-jacket-charcoal",
    seasonId: "winter-2024",
    name: "Insulated Puffer Jacket",
    color: "Charcoal",
    price: 160,
    image: "https://via.placeholder.com/400x500?text=Puffer+Jacket",
    description:
      "High-collar puffer built for cold nights, with matte finish shell.",
    details: [
      "Water-resistant shell",
      "Synthetic insulation",
      "Two-way zipper",
      "Hidden interior pocket",
    ],
  },

  // Summer 2024 (archived)
  {
    id: "summer24-mesh-shorts-cream",
    seasonId: "summer-2024",
    name: "Mesh Shorts",
    color: "Cream",
    price: 60,
    image: "https://via.placeholder.com/400x500?text=Mesh+Shorts",
    description:
      "Breathable mesh shorts with subtle branding, designed for real heat.",
    details: [
      "Double-layer mesh",
      "Elastic waistband with drawcord",
      "Embroidered logo",
      "Above-knee cut",
    ],
  },
];
