// src/app/collections/SeasonProductsPage.jsx
import { useParams, Link } from "react-router-dom";
import { SEASONS, PRODUCTS } from "../../data/catalog.js";

export default function SeasonProductsPage() {
  const { seasonId } = useParams();

  const season = SEASONS.find((s) => s.id === seasonId);
  const products = PRODUCTS.filter((p) => p.seasonId === seasonId);

  if (!season) {
    return (
      <main className="page">
        <p>Season not found.</p>
        <Link to="/collections" className="card-link">
          Back to Collections
        </Link>
      </main>
    );
  }

  return (
    <main className="page products-page">
      <header className="page-header">
        <h1>{season.name}</h1>
        <p>{season.tagline}</p>
      </header>

      {products.length === 0 ? (
        <p>No products found for this season yet.</p>
      ) : (
        <section className="product-grid">
          {products.map((product) => (
            <article key={product.id} className="product-card">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>
              <div className="product-body">
                <h2 className="product-name">{product.name}</h2>
                <p className="product-meta">{product.color}</p>
                <div className="product-footer">
                  <span className="product-price">${product.price}</span>
                  <Link
                    to={`/product/${product.id}`}
                    className="product-add"
                  >
                    View Item
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </section>
      )}

      <footer className="footer">
        <Link to="/collections" className="card-link">
          ← Back to Collections
        </Link>
      </footer>
    </main>
  );
}
