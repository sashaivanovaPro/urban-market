import api from "./api";
import { Product } from "../types/product";

interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export const productService = {
  getAll: async (): Promise<ProductsResponse> => {
    const response = await api.get<ProductsResponse>("/products");
    return response.data;
  },

  getById: async (id: number): Promise<Product> => {
    const response = await api.get<Product>(`/products/${id}`);
    return response.data;
  },
};
