// src/app/product/ProductDetailPage.jsx
import { useParams, Link } from "react-router-dom";
import { PRODUCTS, SEASONS } from "../../data/catalog.js";
import { useCart } from "../../context/CartContext.jsx";
import { useState } from "react";

export default function ProductDetailPage() {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [size, setSize] = useState("M");

  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <main className="page">
        <p>Product not found.</p>
        <Link to="/collections" className="card-link">
          Back to Collections
        </Link>
      </main>
    );
  }

  const season = SEASONS.find((s) => s.id === product.seasonId);

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: product.color,
      size,
    });
    // optional: show feedback later
  };

  return (
    <main className="page product-detail-page">
      <section className="product-detail-layout">
        {/* Image */}
        <div className="product-detail-image-wrapper">
          <img
            src={product.image}
            alt={product.name}
            className="product-detail-image"
          />
        </div>

        {/* Info */}
        <div className="product-detail-info">
          {season && (
            <p className="product-detail-season">
              {season.name} · {season.title}
            </p>
          )}
          <h1 className="product-detail-name">{product.name}</h1>
          <p className="product-detail-color">{product.color}</p>

          <p className="product-detail-description">{product.description}</p>

          <div className="product-detail-price">${product.price}</div>

          {/* Size selector (simple) */}
          <div className="product-detail-size">
            <span>Size:</span>
            <div className="size-options">
              {["S", "M", "L", "XL"].map((s) => (
                <button
                  key={s}
                  type="button"
                  className={
                    size === s ? "size-pill size-pill-active" : "size-pill"
                  }
                  onClick={() => setSize(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="product-detail-actions">
            <button className="btn-primary" onClick={handleAddToCart}>
              Add to Cart
            </button>
            {season && (
              <Link
                to={`/collections/${season.id}`}
                className="btn-secondary"
              >
                Back to {season.name}
              </Link>
            )}
          </div>

          {/* Extra details list */}
          {product.details && product.details.length > 0 && (
            <ul className="product-detail-list">
              {product.details.map((d, i) => (
                <li key={i}>{d}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
