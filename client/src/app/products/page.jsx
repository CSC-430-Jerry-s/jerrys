// src/app/products/page.jsx
import { useParams, Link } from "react-router-dom";
import { collections, productsByCollection } from "../data/shopData";

export default function ProductsPage() {
  const { collectionId } = useParams();

  const collection = collections.find((c) => c.id === collectionId);
  const products = productsByCollection[collectionId] || [];

  if (!collection) {
    return (
      <section className="seasonal-section">
        <div className="section-header">
          <h2 className="section-title">Collection not found</h2>
          <p className="section-description">
            This collection doesn&apos;t exist. Try another drop.
          </p>
        </div>
      </section>
    );
  }

  return (
    <>
      <div className="page-header">
        <h1 className="page-title">{collection.name}</h1>
        <p className="page-subtitle">
          {collection.seasonLabel} • {collection.tagline}
        </p>
      </div>

      <section className="seasonal-section">
        <div className="section-header">
          <div className="section-badge">COLLECTION PIECES</div>
          <h2 className="section-title">SHOP THE DROP</h2>
          <p className="section-description">
            Handpicked looks from this season&apos;s story.
          </p>
        </div>

        <div className="collections-grid">
          {products.map((p) => (
            <Link
              key={p.id}
              to={`/collections/${collectionId}/${p.id}`}
              className="collection-tile tile-fall"
            >
              <div className="tile-image-area">
                <div className="tile-placeholder">{p.emoji}</div>
              </div>
              <div className="tile-content">
                <div className="tile-season">{collection.seasonLabel}</div>
                <h3 className="tile-name">{p.name}</h3>
                <p className="tile-tagline">${p.price.toFixed(2)}</p>
                <p className="section-description">{p.shortDescription}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 JERRY&apos;S STREETWEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
}
