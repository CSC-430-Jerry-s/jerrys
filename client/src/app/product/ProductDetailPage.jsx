// src/app/product/ProductDetailPage.jsx
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { findProductById } from "../data/shopData";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  const product = findProductById(productId);

  if (!product) {
    return (
      <div style={{ padding: "2rem" }}>
        Product not found. Try another collection.
      </div>
    );
  }

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  const handleAdd = () => {
    if (!selectedSize) return;
    addItem({
      id: product.id + "-" + selectedSize,
      name: `${product.name} (${selectedSize})`,
      price: product.price,
      quantity: 1,
    });
  };

  return (
    <>
      <div className="breadcrumb">
        <span className="current">{product.name}</span>
      </div>

      <section className="product-section">
        <div className="product-container">
          {/* images */}
          <div className="product-images">
            <div className="main-image">
              <div className="product-badge">NEW</div>
              <div className="image-placeholder">{product.emoji}</div>
            </div>
            <div className="thumbnail-row">
              <div className="thumbnail active">
                <span style={{ fontSize: "2rem", opacity: 0.5 }}>
                  {product.emoji}
                </span>
              </div>
              <div className="thumbnail">
                <span style={{ fontSize: "2rem", opacity: 0.5 }}>👕</span>
              </div>
              <div className="thumbnail">
                <span style={{ fontSize: "2rem", opacity: 0.5 }}>📐</span>
              </div>
              <div className="thumbnail">
                <span style={{ fontSize: "2rem", opacity: 0.5 }}>🔍</span>
              </div>
            </div>
          </div>

          {/* info */}
          <div className="product-info">
            <div className="product-category">
              {product.collectionId.toUpperCase()}
            </div>
            <h1 className="product-name">{product.name}</h1>
            <div className="product-price">${product.price.toFixed(2)}</div>
            <p className="product-description">{product.shortDescription}</p>

            <div className="selector-section">
              <label className="selector-label">
                Size: {selectedSize ?? "Select Size"}
              </label>
              <div className="size-options">
                {sizes.map((s) => (
                  <button
                    key={s}
                    className={
                      "size-button" +
                      (s === "XS" ? " unavailable" : "") +
                      (selectedSize === s ? " selected" : "")
                    }
                    disabled={s === "XS"}
                    onClick={() => setSelectedSize(s)}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            <div className="add-to-cart-section">
              <button
                className="add-to-cart-button"
                disabled={!selectedSize}
                onClick={handleAdd}
              >
                {selectedSize ? "ADD TO CART" : "SELECT SIZE TO ADD TO CART"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
