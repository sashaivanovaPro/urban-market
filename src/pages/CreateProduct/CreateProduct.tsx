// src/pages/CreateProduct/CreateProduct.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createProductSchema,
  ProductFormData,
} from "../../types/createProductSchema";
import "./CreateProduct.css";
import { useAppDispatch } from "../../hooks/redux";
import { z } from "zod";
import { addProduct } from "../../store/slices/productsSlice";

const CreateProduct = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const initialState: ProductFormData = {
    title: "",
    description: "",
    price: "",
    discountPercentage: "",
    category: "",
    brand: "",
    stock: "",
    rating: "",
    thumbnail: "",
    images: "",
  };

  const [formData, setFormData] = useState<ProductFormData>(initialState);

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      console.log("Validating data...");

      const validatedData = createProductSchema.parse(formData);

      console.log("Validated data:", validatedData);

      console.log("Dispatching addProduct action...");
      dispatch(addProduct(validatedData));
      console.log("Product added to store");

      setFormData(initialState);
      setErrors({});

      navigate("/products");
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0].toString()] = err.message;
          }
        });
        setErrors(newErrors);
      }
    }
  };

  return (
    <div className="create-product">
      <h2 className="create-product__title">Create New Product</h2>

      <form className="create-product__form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="title" className="form-label">
            Title <span className="required">*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="form-input"
            placeholder="Product title"
            value={formData.title}
            onChange={handleChange}
            required
          />
          <div className="form-error">{errors.title || ""}</div>
        </div>

        <div className="form-group">
          <label htmlFor="description" className="form-label">
            Description <span className="required">*</span>
          </label>
          <textarea
            id="description"
            name="description"
            className="form-input form-textarea"
            placeholder="Product description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
          <div className="form-error">{errors.description || ""}</div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="price" className="form-label">
              Price ($) <span className="required">*</span>
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="form-input"
              placeholder="0.00"
              min="0"
              step="0.01"
              value={formData.price}
              onChange={handleChange}
              required
            />
            <div className="form-error">{errors.price || ""}</div>
          </div>

          <div className="form-group">
            <label htmlFor="discountPercentage" className="form-label">
              Discount (%)
            </label>
            <input
              type="number"
              id="discountPercentage"
              name="discountPercentage"
              className="form-input"
              placeholder="0"
              min="0"
              max="100"
              value={formData.discountPercentage}
              onChange={handleChange}
            />
            <div className="form-error">{errors.discountPercentage || ""}</div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Category <span className="required">*</span>
            </label>
            <select
              id="category"
              name="category"
              className="form-input form-select"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value="">Select category</option>
              <option value="beauty">Beauty</option>
              <option value="fragrances">Fragrances</option>
              <option value="furniture">Furniture</option>
              <option value="kitchen-accessories">Kitchen Accessories</option>
              <option value="groceries">Groceries</option>
              <option value="home-decoration">Home Decoration</option>
              <option value="laptops">Laptops</option>
              <option value="skin-care">Skin Care</option>
              <option value="smartphones">Smartphones</option>
            </select>
            <div className="form-error">{errors.category || ""}</div>
          </div>

          <div className="form-group">
            <label htmlFor="brand" className="form-label">
              Brand <span className="required">*</span>
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="form-input"
              placeholder="Brand name"
              value={formData.brand}
              onChange={handleChange}
              required
            />
            <div className="form-error">{errors.brand || ""}</div>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="stock" className="form-label">
              Stock <span className="required">*</span>
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="form-input"
              placeholder="0"
              min="0"
              value={formData.stock}
              onChange={handleChange}
              required
            />
            <div className="form-error">{errors.stock || ""}</div>
          </div>

          <div className="form-group">
            <label htmlFor="rating" className="form-label">
              Rating
            </label>
            <input
              type="number"
              id="rating"
              name="rating"
              className="form-input"
              placeholder="0.0"
              min="0"
              max="5"
              step="0.1"
              value={formData.rating}
              onChange={handleChange}
            />
            <div className="form-error">{errors.rating || ""}</div>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="thumbnail" className="form-label">
            Thumbnail URL <span className="required">*</span>
          </label>
          <input
            type="url"
            id="thumbnail"
            name="thumbnail"
            className="form-input"
            placeholder="https://example.com/image.jpg"
            value={formData.thumbnail}
            onChange={handleChange}
            required
          />
          <div className="form-error">{errors.thumbnail || ""}</div>
        </div>

        <div className="form-group">
          <label htmlFor="images" className="form-label">
            Additional Images (URLs, comma separated)
          </label>
          <textarea
            id="images"
            name="images"
            className="form-input form-textarea"
            placeholder="https://example.com/image1.jpg, https://example.com/image2.jpg"
            value={formData.images}
            onChange={handleChange}
          ></textarea>
          <div className="form-error">{errors.images || ""}</div>
        </div>

        <div className="form-actions">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => navigate("/products")}
          >
            Cancel
          </button>
          <button type="submit" className="btn btn-primary">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
