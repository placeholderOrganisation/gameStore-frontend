export type NavbarLink = {
  name: string;
  path: string;
};

export type Game = {
  name: string;
  formattedName: string;
  platform: string;
  rating: number;
  price: number;
  imgs: ImageObject;
  isActive: boolean;
  genre: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
};

export type ImageObject = {
  icon_url: string;
  medium_url: string;
  screen_url: string;
  screen_large_url: string;
  small_url: string;
  super_url: string;
  thumb_url: string;
  tiny_url: string;
  original_url: string;
  image_tags: string;
}