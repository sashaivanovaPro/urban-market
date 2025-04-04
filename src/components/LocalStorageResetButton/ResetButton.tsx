import { useAppDispatch } from "../../hooks/redux";
import {
  fetchProducts,
  resetProductsState,
} from "../../store/slices/productsSlice";
import "./ResetButton.css";

const ResetButton: React.FC = () => {
  const dispatch = useAppDispatch();

  const handleReset = () => {
    dispatch(resetProductsState());
    // После сброса состояния перезагружаем продукты с API
    dispatch(fetchProducts());
  };

  return (
    <button onClick={handleReset} className="reset-button">
      Reset Local Storage
    </button>
  );
};

export default ResetButton;
