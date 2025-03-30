export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  category: string;
  images: string[];
  thumbnail: string;
  isLiked?: boolean;
}
