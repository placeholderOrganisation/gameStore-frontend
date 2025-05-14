export const APP_PAGES = {
  home: "/",
  catalog: "/catalog",
};

export const featuredGames = [
  {
    name: "The Last of Us Part II",
    platform: "PS4",
    price: 29.99,
    rating: 5,
    imgs: ["/placeholder.svg?height=300&width=225"],
    genre: "Action",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    featured: true,
  },
  {
    name: "Ghost of Tsushima",
    platform: "PS4",
    price: 34.99,
    rating: 4,
    imgs: ["/placeholder.svg?height=300&width=225"],
    genre: "Action",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    featured: true,
  },
  {
    name: "Halo Infinite",
    platform: "Xbox Series X",
    price: 39.99,
    rating: 4,
    imgs: ["/placeholder.svg?height=300&width=225"],
    genre: "Action",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    featured: true,
  },
  {
    name: "The Legend of Zelda",
    platform: "Nintendo Switch",
    price: 44.99,
    rating: 5,
    imgs: ["/placeholder.svg?height=300&width=225"],
    genre: "Action",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    featured: true,
  },
  {
    name: "Halo Infinite",
    platform: "Xbox Series X",
    price: 39.99,
    rating: 4,
    imgs: ["/placeholder.svg?height=300&width=225"],
    genre: "Action",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    featured: true,
  },
  {
    name: "The Legend of Zelda",
    platform: "Nintendo Switch",
    price: 44.99,
    rating: 5,
    imgs: ["/placeholder.svg?height=300&width=225"],
    genre: "Action",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
    featured: true,
  },
];

export const categories = [
  { name: "PlayStation", image: "/placeholder.svg?height=200&width=200" },
  { name: "Xbox", image: "/placeholder.svg?height=200&width=200" },
  { name: "Nintendo", image: "/placeholder.svg?height=200&width=200" },
  { name: "PC Games", image: "/placeholder.svg?height=200&width=200" },
];

export const features = [
  {
    title: "Quality Guaranteed",
    description: "All our games are tested and guaranteed to work perfectly.",
    icon: "QualityGuaranteed",
  },
  {
    title: "Great Trade-In Values",
    description: "Get the best value when you trade in your used games.",
    icon: "TradeIn",
  },
  {
    title: "Huge Selection",
    description: "From retro classics to the latest releases, we have it all.",
    icon: "Catalog",
  },
];

export const socialLinks = [
  {
    name: "Instagram",
    url: "https://instagram.com/",
    icon: "Instagram",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/",
    icon: "Facebook",
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/1234567890", // Replace with your WhatsApp number
    icon: "WhatsApp",
  },
];

export const platforms = [
  "All",
  "PS4",
  "PS5",
  "Xbox Series X",
  "Nintendo Switch",
  "PC",
];
export const genres = [
  "All",
  "Action",
  "Adventure",
  "RPG",
  "Sports",
  "Strategy",
];
export const sortOptions = [
  { value: "name_asc", label: "Name (A-Z)" },
  { value: "name_desc", label: "Name (Z-A)" },
  { value: "price_asc", label: "Price (Low to High)" },
  { value: "price_desc", label: "Price (High to Low)" },
  { value: "rating_desc", label: "Rating (High to Low)" },
];
