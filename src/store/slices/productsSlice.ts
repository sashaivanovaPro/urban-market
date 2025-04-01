import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductDetails } from "../../types/product";
import { productService } from "../../services/productService";

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
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter(
        (product) => product.id !== action.payload
      );
    },
    showLikedProducts: (state, action: PayloadAction<boolean>) => {
      state.filter.showLikedOnly = action.payload;
    },
    showTheBestDiscount: (state, action: PayloadAction<boolean>) => {
      state.filter.bestPrice = action.payload;
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
        state.items = action.payload.products.map((product) => ({
          ...product,
          isLiked: false,
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
} = productsSlice.actions;

export default productsSlice.reducer;
