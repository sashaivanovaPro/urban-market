import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import "./ProductFilter.css";
import {
  showTheBestDiscount,
  showLikedProducts,
} from "../../store/slices/productsSlice";
import ResetButton from "../LocalStorageResetButton/ResetButton";

const ProductFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const { showLikedOnly, bestPrice } = useAppSelector(
    (state: RootState) => state.products.filter
  );

  return (
    <div className="product-filter">
      <div className="product-filter__buttons">
        <button
          className={`product-filter__button ${
            !showLikedOnly && !bestPrice ? "active" : ""
          }`}
          onClick={() => {
            dispatch(showLikedProducts(false));
            dispatch(showTheBestDiscount(false));
          }}
        >
          All Products
        </button>
        <button
          className={`product-filter__button ${showLikedOnly ? "active" : ""}`}
          onClick={() => {
            dispatch(showLikedProducts(true));
            dispatch(showTheBestDiscount(false));
          }}
        >
          Favorites
        </button>
        <button
          className={`product-filter__button ${bestPrice ? "active" : ""}`}
          onClick={() => {
            dispatch(showTheBestDiscount(true));
            dispatch(showLikedProducts(false));
          }}
        >
          Super Discount
        </button>
      </div>
      <ResetButton />
    </div>
  );
};

export default ProductFilter;
