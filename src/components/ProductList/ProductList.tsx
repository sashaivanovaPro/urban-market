import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "./../../store/store.ts";
import ProductCard from "../ProductCard/ProductCard";
import "./ProductList.css";

const ProductList: React.FC = () => {
  const products = useSelector((state: RootState) => state.products.items);
  return (
    <div className="product-list">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
