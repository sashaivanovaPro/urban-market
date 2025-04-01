import api from "./api";
import { ProductCardBase } from "../types/product";

interface ProductsResponse {
  products: ProductCardBase[];
  total: number;
  skip: number;
  limit: number;
}

export const productService = {
  getAll: async (): Promise<ProductsResponse> => {
    const response = await api.get<ProductsResponse>("/products");
    return response.data;
  },

  getById: async (id: number): Promise<ProductCardBase> => {
    const response = await api.get<ProductCardBase>(`/products/${id}`);
    return response.data;
  },
};
