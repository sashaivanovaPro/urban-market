import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetails } from "../../types/product";
import { productService } from "../../services/productService";
import { CreateProductFormData } from "../../types/createProductSchema";

export const fetchProducts = createAsyncThunk("products/fetchAll", async () => {
  const data = await productService.getAll();
  return data;
});

export const fetchProductById = createAsyncThunk(
  "products/fetchById",
  async (id: number) => {
    const data = await productService.getById(id);
    return data;
  }
);

interface ProductsState {
  items: ProductDetails[];
  loading: boolean;
  error: string | null;
  filter: {
    showLikedOnly: boolean;
    bestPrice: boolean;
  };
}

const initialState: ProductsState = {
  items: [],
  loading: false,
  error: null,
  filter: {
    showLikedOnly: false,
    bestPrice: false,
  },
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const product = state.items.find((item) => item.id === action.payload);

      if (product) {
        product.isLiked = !product.isLiked;
      }

      const likedProducts = state.items
        .filter((item) => item.isLiked)
        .map((item) => item.id);
      console.log(likedProducts);
      localStorage.setItem("likedProducts", JSON.stringify(likedProducts));
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
      // Получаем текущий список удаленных продуктов из localStorage
      const deletedProductsJSON = localStorage.getItem("deletedProducts");
      const deletedProducts = deletedProductsJSON
        ? JSON.parse(deletedProductsJSON)
        : [];

      // Добавляем новый ID в список, если его там еще нет
      if (!deletedProducts.includes(action.payload)) {
        deletedProducts.push(action.payload);
      }

      // Сохраняем обновленный список
      localStorage.setItem("deletedProducts", JSON.stringify(deletedProducts));
    },
    resetProductsState: (state) => {
      localStorage.removeItem("likedProducts");
      localStorage.removeItem("deletedProducts");

      state.items = state.items.map((product) => ({
        ...product,
        isLiked: false,
      }));
    },
    showLikedProducts: (state, action: PayloadAction<boolean>) => {
      state.filter.showLikedOnly = action.payload;
    },
    showTheBestDiscount: (state, action: PayloadAction<boolean>) => {
      state.filter.bestPrice = action.payload;
    },
    addProduct: (state, action: PayloadAction<CreateProductFormData>) => {
      const baseProduct = {
        id: Date.now(),
        title: action.payload.title,
        description: action.payload.description,
        price: action.payload.price,
        category: action.payload.category,
        brand: action.payload.brand,
        stock: action.payload.stock,
        thumbnail: action.payload.thumbnail,
        discountPercentage: action.payload.discountPercentage ?? 0,
        rating: action.payload.rating ?? 0,
        isLiked: false,
        images: Array.isArray(action.payload.images)
          ? action.payload.images
          : [],
      };

      const newProduct: ProductDetails = {
        ...baseProduct,
        tags: [],
        weight: 0,
        dimensions: { width: 0, height: 0, depth: 0 },
        warrantyInformation: "Standard warranty",
        shippingInformation: "Standard shipping",
        availabilityStatus: "In Stock",
        reviews: [],
        returnPolicy: "30-day return policy",
        minimumOrderQuantity: 1,
        meta: {
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          barcode: `PROD-${Date.now()}`,
          qrCode: `QRPROD-${Date.now()}`,
        },
      };

      state.items.unshift(newProduct);
      console.log("New product added:", newProduct);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;

        // Получаем списки лайкнутых и удаленных продуктов
        const likedProductsJSON = localStorage.getItem("likedProducts");
        const likedProducts = likedProductsJSON
          ? JSON.parse(likedProductsJSON)
          : [];

        const deletedProductsJSON = localStorage.getItem("deletedProducts");
        const deletedProducts = deletedProductsJSON
          ? JSON.parse(deletedProductsJSON)
          : [];

        // Фильтруем удаленные продукты и добавляем информацию о лайках
        state.items = action.payload.products
          .filter((product) => !deletedProducts.includes(product.id))
          .map((product) => ({
            ...product,
            isLiked: likedProducts.includes(product.id),
          })) as ProductDetails[];
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.loading = false;
        state.items = [];
        state.error = action.error.message || "Oops! Something went wrong.";
      });
  },
});

export const {
  toggleLike,
  deleteProduct,
  showLikedProducts,
  showTheBestDiscount,
  resetProductsState,
  addProduct,
} = productsSlice.actions;

export default productsSlice.reducer;
