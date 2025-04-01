import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux.ts";
import { RootState } from "./../../store/store.ts";
import {
  fetchProducts,
  deleteProduct,
  toggleLike,
} from "../../store/slices/productsSlice";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";
import ProductFilter from "../ProductFilter/ProductFilter.tsx";

const ProductList: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items, loading, error, filter } = useAppSelector(
    (state: RootState) => state.products
  );

  const filteredProducts = filter.showLikedProducts
    ? items.filter((product) => product.isLiked)
    : items;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <ProductFilter />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onLike={() => dispatch(toggleLike(product.id))}
            onDelete={() => dispatch(deleteProduct(product.id))}
          />
        ))}
      </div>
    </>
  );
};

export default ProductList;
