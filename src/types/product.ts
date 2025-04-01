export interface ProductCardBase {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  category: string;
  images: string[];
  thumbnail: string;
  isLiked?: boolean;
}

export interface ProductDetails extends ProductCardBase {
  stock: number;
  tags: string[];
  brand: string;
  weight: number;
  dimensions: Dimensions;
  warrantyInformation: string;
  shippingInformation: string;
  availabilityStatus: string;
  reviews: ProductReview[];
  returnPolicy: string;
  minimumOrderQuantity: number;
  meta: MetaData;
}

interface Dimensions {
  width: number;
  height: number;
  depth: number;
}

interface ProductReview {
  rating: number;
  comment: string;
  date: string;
  reviewerName: string;
  reviewerEmail: string;
}

interface MetaData {
  createdAt: string;
  updatedAt: string;
  barcode: string;
  qrCode: string;
}
