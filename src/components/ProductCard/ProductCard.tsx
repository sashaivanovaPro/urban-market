import React from "react";
import { Product } from "../../types/product";
import "./ProductCard.css";
import { Heart, HeartOff, Trash2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProductCardProps {
  product: Product;
  onLike: () => void;
  onDelete: () => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onLike,
  onDelete,
}) => {
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent) => {
    if (!(event.target as HTMLElement).closest(".product-card__actions")) {
      event.stopPropagation();
      console.log("ProductCard clicked");
      navigate(`/products/${product.id}`);
    }
  };

  return (
    <div className="product-card" onClick={handleClick}>
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
            {product.isLiked ? <Heart className="icon-heart" /> : <HeartOff />}
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
