// src/app/homepage/page.jsx

export default function Homepage() {
  return (
    <main className="homepage">
      {/* Shipping banner */}
      <div className="shipping-banner">
        <span className="shipping-text">
          🚚 FREE U.S. SHIPPING ON ORDERS OVER $100 WHILE COLLECTION IS LIVE!
        </span>
        <span className="shipping-timer">09D 05H 31M 17S</span>
      </div>

      {/* Hero section with placeholder “carousel” */}
      <section className="hero-section">
        <div className="hero-carousel">
          {/* Slide 1 */}
          <div className="hero-slide active">
            <div className="hero-placeholder hero-placeholder-1">
              <div className="placeholder-text">OUTERWEAR</div>
              <div className="placeholder-model" />
              <div className="placeholder-accent accent-1" />
              <div className="placeholder-product" />
            </div>
          </div>

          {/* Slide 2 */}
          <div className="hero-slide">
            <div className="hero-placeholder hero-placeholder-2">
              <div className="placeholder-text">DENIM</div>
              <div className="placeholder-model" />
              <div className="placeholder-accent accent-2" />
              <div className="placeholder-product" />
            </div>
          </div>

          {/* Slide 3 */}
          <div className="hero-slide">
            <div className="hero-placeholder hero-placeholder-3">
              <div className="placeholder-text">HOODIES</div>
              <div className="placeholder-model" />
              <div className="placeholder-accent accent-3" />
              <div className="placeholder-product" />
            </div>
          </div>
        </div>

        {/* Overlay text on top of hero */}
        <div className="hero-overlay">
          <div className="collection-badge">FALL 2025</div>
          <h1 className="hero-title">URBAN ESSENTIALS</h1>
          <p className="hero-subtitle">Bold. Authentic. Unapologetic.</p>
        </div>

        {/* Dots under the hero (carousel indicators) */}
        <div className="carousel-dots">
          <span className="dot active" />
          <span className="dot" />
          <span className="dot" />
        </div>
      </section>

      {/* Countdown section */}
      <section className="countdown-section">
        <h2 className="countdown-title">TIME LEFT IN FALL COLLECTION</h2>
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="time-value">09</span>
            <span className="time-label">DAYS</span>
          </div>
          <div className="time-unit">
            <span className="time-value">05</span>
            <span className="time-label">HOURS</span>
          </div>
          <div className="time-unit">
            <span className="time-value">31</span>
            <span className="time-label">MINUTES</span>
          </div>
          <div className="time-unit">
            <span className="time-value">17</span>
            <span className="time-label">SECONDS</span>
          </div>
        </div>
      </section>

      {/* Divider line */}
      <div className="divider" />

      {/* CTA */}
      <section className="cta-section">
        <a href="/collections" className="shop-button">
          <span>SHOP THIS DROP</span>
        </a>
      </section>

      {/* Collections preview cards (Seasonal vs Core) */}
      <section className="collections-preview">
        <article className="preview-card seasonal-card">
          <div className="card-badge seasonal-badge">LIMITED DROP</div>
          <h3 className="card-title">SEASONAL COLLECTIONS</h3>
          <p className="card-description">
            Short-run drops built around a theme. Once this collection ends, pieces
            move into the archive and don&apos;t come back the same way.
          </p>
          <a href="/collections" className="card-link">
            View Seasonal Drops →
          </a>
        </article>

        <article className="preview-card permanent-card">
          <div className="card-badge permanent-badge">CORE</div>
          <h3 className="card-title">CORE COLLECTION</h3>
          <p className="card-description">
            Everyday streetwear essentials that stay available all year.
            Clean shapes, neutral colors, and fits that go with everything.
          </p>
          <a href="/collections" className="card-link">
            Shop Core Pieces →
          </a>
        </article>
      </section>

      <footer className="footer">
        <p>© 2025 JERRY&apos;S STREETWEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}
