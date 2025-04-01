import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { RootState } from "../../store/store";
import "./ProductFilter.css";
import { showLikedProducts } from "../../store/slices/productsSlice";

const ProductFilter: React.FC = () => {
  const dispatch = useAppDispatch();
  const showLikedOnly = useAppSelector(
    (state: RootState) => state.products.filter.showLikedProducts
  );

  const handleFilterChange = () => {
    dispatch(showLikedProducts(!showLikedOnly));
  };

  return (
    <div className="product-filter">
      <div className="product-filter__buttons">
        <button
          className={`product-filter__button ${!showLikedOnly ? "active" : ""}`}
          onClick={() => dispatch(showLikedProducts(false))}
        >
          All Products
        </button>
        <button
          className={`product-filter__button ${showLikedOnly ? "active" : ""}`}
          onClick={() => dispatch(showLikedProducts(true))}
        >
          Favorites
        </button>
      </div>
    </div>
  );
};

export default ProductFilter;
