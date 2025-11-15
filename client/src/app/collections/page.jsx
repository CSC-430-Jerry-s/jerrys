// src/app/collections/page.jsx
import { Link } from "react-router-dom";
import { collections } from "../data/shopData";

export default function CollectionsPage() {
  return (
    <>
      <section className="page-header">
        <h1 className="page-title">COLLECTIONS</h1>
        <p className="page-subtitle">
          Explore seasonal drops and timeless essentials
        </p>
      </section>

      <section className="seasonal-section">
        <div className="section-header">
          <div className="section-badge">SEASONAL DROPS</div>
          <h2 className="section-title">LIMITED COLLECTIONS</h2>
          <p className="section-description">
            Exclusive quarterly releases. Each collection tells a story, available
            for 30 days.
          </p>
        </div>

        <div className="collections-grid">
          {collections.map((c, idx) => (
            <Link
              key={c.id}
              to={`/collections/${c.id}`}
              className={
                "collection-tile " +
                (c.seasonLabel.toLowerCase().includes("fall")
                  ? "tile-fall "
                  : c.seasonLabel.toLowerCase().includes("winter")
                  ? "tile-winter "
                  : c.seasonLabel.toLowerCase().includes("spring")
                  ? "tile-spring "
                  : "tile-summer ") +
                (idx === 0 ? "active" : "")
              }
            >
              <div className="tile-image-area">
                <div className="tile-placeholder">
                  {c.seasonLabel.split(" ")[0]}
                </div>
              </div>
              <div className="tile-content">
                <div className="tile-season">{c.seasonLabel}</div>
                <h3 className="tile-name">{c.name}</h3>
                <p className="tile-tagline">{c.tagline}</p>
                <div className="tile-info">
                  <div className="info-item">
                    <div className="info-label">Items</div>
                    <div className="info-value">{c.items}</div>
                  </div>
                  <div className="info-item">
                    <div className="info-label">Status</div>
                    <div className="info-value">
                      {c.status === "live"
                        ? c.id === "fall-2025"
                          ? "LIVE"
                          : "LIVE"
                        : "SOLD"}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Core collection card */}
      <section className="core-section">
        <div className="section-header">
          <div className="section-badge">ALWAYS AVAILABLE</div>
          <h2 className="section-title">CORE COLLECTION</h2>
          <p className="section-description">
            Our signature pieces, available year-round. The foundation of every
            streetwear wardrobe.
          </p>
        </div>

        <div className="core-card">
          <div className="core-preview">
            <div className="preview-box"></div>
            <div className="preview-box"></div>
            <div className="preview-box"></div>
            <div className="preview-box"></div>
          </div>
          <h3 className="core-card-title">THE ESSENTIALS</h3>
          <p className="core-card-tagline">"Built to Last, Made to Flex"</p>
          <p className="core-card-description">
            Classic silhouettes with modern edge. Hoodies, tees, denim, and
            outerwear that define the JERRY&apos;S aesthetic.
          </p>
          <Link to="/collections/fall-2025" className="collection-button">
            SHOP CORE COLLECTION
          </Link>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 JERRY&apos;S STREETWEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
}
