// src/app/homepage/page.jsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// 👉 Change this to whatever date/time your Fall collection ends
const FALL_COLLECTION_END = new Date("2025-11-30T23:59:59");

function getTimeRemaining() {
  const now = new Date().getTime();
  const end = FALL_COLLECTION_END.getTime();
  const diff = end - now;

  if (diff <= 0) {
    return {
      total: 0,
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };
  }

  const seconds = Math.floor((diff / 1000) % 60);
  const minutes = Math.floor((diff / 1000 / 60) % 60);
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));

  // padStart to keep 2 digits
  return {
    total: diff,
    days: String(days).padStart(2, "0"),
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
  };
}

export default function Homepage() {
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        const next = getTimeRemaining();
        // stop timer once it hits zero
        if (next.total === 0 && prev.total !== 0) {
          clearInterval(timer);
        }
        return next;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <>
      {/* Free Shipping Banner */}
      <div className="shipping-banner">
        <span className="shipping-text">
          🚚 FREE U.S. SHIPPING ON ORDERS OVER $100 WHILE COLLECTION IS LIVE!
        </span>
        <span className="shipping-timer">
          {days}D {hours}H {minutes}M {seconds}S
        </span>
      </div>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-carousel">
          <div className="hero-slide active">
            <div className="hero-placeholder hero-placeholder-2">
              <div className="placeholder-text">LUXURY</div>
              <div className="placeholder-model"></div>
              <div className="placeholder-accent accent-1"></div>
              <div className="placeholder-product"></div>
            </div>
          </div>
        </div>

        <div className="hero-overlay">
          <div className="collection-badge">FALL 2025</div>
          <h1 className="hero-title">URBAN ESSENTIALS</h1>
          <p className="hero-subtitle">Bold. Authentic. Unapologetic.</p>
        </div>

        <div className="carousel-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>
      </section>

      {/* Countdown */}
      <section className="countdown-section">
        <h2 className="countdown-title">TIME LEFT IN FALL COLLECTION</h2>
        <div className="countdown-timer">
          <div className="time-unit">
            <span className="time-value">{days}</span>
            <span className="time-label">DAYS</span>
          </div>
          <div className="time-unit">
            <span className="time-value">{hours}</span>
            <span className="time-label">HOURS</span>
          </div>
          <div className="time-unit">
            <span className="time-value">{minutes}</span>
            <span className="time-label">MINUTES</span>
          </div>
          <div className="time-unit">
            <span className="time-value">{seconds}</span>
            <span className="time-label">SECONDS</span>
          </div>
        </div>
      </section>

      <div className="divider"></div>

      {/* CTA */}
      <section className="cta-section">
        <Link to="/collections" className="shop-button">
          <span>SHOP THIS DROP</span>
        </Link>
      </section>

      {/* Collections Preview */}
      <section className="collections-preview">
        <div className="preview-container">
          <h2 className="preview-title">EXPLORE OUR COLLECTIONS</h2>
          <p className="preview-subtitle">Limited drops meet timeless essentials</p>

          <div className="preview-grid">
            <div className="preview-card limited-card">
              <div className="card-badge limited-badge">LIMITED TIME</div>
              <div className="card-icon">⚡</div>
              <h3 className="card-title">SEASONAL DROPS</h3>
              <p className="card-description">
                Exclusive collections released quarterly. Each drop features unique pieces
                available for 30 days only.
              </p>
              <Link to="/collections" className="card-link">
                Shop Current Drop →
              </Link>
            </div>

            <div className="preview-card permanent-card">
              <div className="card-badge permanent-badge">ALWAYS AVAILABLE</div>
              <div className="card-icon">♾️</div>
              <h3 className="card-title">CORE COLLECTION</h3>
              <p className="card-description">
                Our signature pieces available year-round. Essential streetwear staples that
                define the JERRY&apos;S aesthetic.
              </p>
              <Link to="/collections" className="card-link">
                Shop Essentials →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 JERRY&apos;S STREETWEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </>
  );
}
