import React from "react";
import { Product } from "../../types/product";
import "./ProductCard.css";
import { Heart, HeartOff, Trash2 } from "lucide-react";

interface ProductCardProps {
  product: Product;
  onLike: () => void;
  onDelete: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onLike,
  onDelete,
}) => {
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
            onClick={onLike}
          >
            {product.isLiked ? <Heart /> : <HeartOff />}
          </button>

          <button className="product-card__delete-btn" onClick={onDelete}>
            <Trash2 />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
