import { Link, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useAppSelector } from "../../hooks/redux";

const ProductDetails = () => {
  const { id } = useParams();

  const product = useAppSelector((state) =>
    state.products.items.find((item) => item.id === Number(id))
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <h2 className="product-detail__title">{product.title}</h2>

      <div className="product-detail__content">
        <div className="product-detail__image-container">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="product-detail__image"
          />
        </div>

        <div className="product-detail__info">
          <div className="product-detail__price-section">
            {product.discountPercentage ? (
              <>
                <div className="product-detail__old-price">
                  <span className="product-detail__label-old">
                    Original price:{" "}
                  </span>
                  <span>${product.price.toFixed(2)}</span>
                </div>
                <div className="product-detail__new-price">
                  <span className="product-detail__label">Sale price: </span>
                  <span>
                    $
                    {(
                      product.price *
                      (1 - product.discountPercentage / 100)
                    ).toFixed(2)}
                  </span>
                </div>
              </>
            ) : (
              <div className="product-detail__regular-price">
                <span className="product-detail__label">Price: </span>
                <span>${product.price.toFixed(2)}</span>
              </div>
            )}
          </div>
          <div className="product-detail__spec-grid">
            <div className="product-detail__spec-item">
              <span className="product-detail__label">Category: </span>
              <span>{product.category}</span>
            </div>

            <div className="product-detail__spec-item">
              <span className="product-detail__label">Brand: </span>
              <span>{product.brand}</span>
            </div>

            <div className="product-detail__spec-item">
              <span className="product-detail__label">Rating: </span>
              <span>{product.rating}/5</span>
            </div>

            <div className="product-detail__spec-item">
              <span className="product-detail__label">In Stock: </span>
              <span>{product.stock} units</span>
            </div>
          </div>
          <div className="product-detail__description-section">
            <h3 className="product-detail__section-title">Description</h3>
            <p className="product-detail__description">{product.description}</p>
          </div>
        </div>
      </div>

      <div className="product-detail__footer">
        <Link to="/products" className="product-detail__back-link">
          &larr; Back to Products
        </Link>
      </div>
    </div>
  );
};
export default ProductDetails;
