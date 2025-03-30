import React from "react";
import { useDispatch } from "react-redux";
import { toggleLike, deleteProduct } from "../../store/slices/productsSlice";
import { Product } from "../../types/product";
import "./ProductCard.css";
import { Heart, HeartOff, Trash2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const dispatch = useDispatch();
  const handleLike = () => {
    dispatch(toggleLike(product.id));
  };

  const handleRemove = () => {
    dispatch(deleteProduct(product.id));
  };
  return (
    <div className="product-card">
      <div className="product-card__image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="product-card__content">
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>
        <div className="product-card__price">${product.price}</div>

        <div className="product-card__actions">
          <button
            className={`product-card__like-btn ${
              product.isLiked ? "active" : ""
            }`}
            onClick={handleLike}
          >
            {product.isLiked ? <Heart /> : <HeartOff />}
          </button>

          <button className="product-card__delete-btn" onClick={handleRemove}>
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
