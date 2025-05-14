export type NavbarLink = {
  name: string;
  path: string;
};

export type Game = {
  name: string;
  platform: string;
  rating: number;
  price: number;
  imgs: string[];
  isActive: boolean;
  genre: string;
  featured: boolean;
  createdAt: Date;
  updatedAt: Date;
  description?: string;
};