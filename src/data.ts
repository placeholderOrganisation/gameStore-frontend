export const APP_PAGES = {
  home: "/",
  catalog: "/catalog",
};

export const featuredGames = [
  {
    name: "The Last of Us Part II",
    formattedName: "The Last of Us Part II",
    platform: "PS4",
    price: 29.99,
    rating: 5,
    imgs: {
      icon_url: "/placeholder.svg?height=300&width=225",
      small_url: "/placeholder.svg?height=300&width=225",
      medium_url: "/placeholder.svg?height=300&width=225",
      screen_url: "/placeholder.svg?height=300&width=225",
      screen_large_url: "/placeholder.svg?height=300&width=225",
      super_url: "/placeholder.svg?height=300&width=225",
      thumb_url: "/placeholder.svg?height=300&width=225",
      tiny_url: "/placeholder.svg?height=300&width=225",
      original_url: "/placeholder.svg?height=300&width=225",
      image_tags: "placeholder",
    },
    genre: "Action",
    featured: true,
    description:
      "The Last of Us Part II is a 2020 action-adventure game developed by Naughty Dog and published by Sony Interactive Entertainment. It is the sequel to the 2013 game The Last of Us and the second installment in the The Last of Us series.",
    isActive: true,
    createdAt: new Date(),
    updatedAt: new Date(),
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

export const sortOptions = [
  { value: "name_asc", label: "Name (A-Z)" },
  { value: "name_desc", label: "Name (Z-A)" },
  { value: "price_asc", label: "Price (Low to High)" },
  { value: "price_desc", label: "Price (High to Low)" },
  { value: "rating_desc", label: "Rating (High to Low)" },
];
