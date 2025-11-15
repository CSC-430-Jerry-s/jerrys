import { useState } from "react";

export default function TrackOrderPage() {
  const [orderNumber, setOrderNumber] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;
    setHasSearched(true);
  };

  return (
    <main className="track-page">
      <section className="track-container">
        {/* SEARCH BOX */}
        <div className="track-search-section">
          <h1>Track Your Order</h1>
          <p>
            Enter your order number below to track your package and see the
            latest shipping updates.
          </p>

          <form className="track-search-box" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter order number (e.g., JRY-2025-10453)"
              value={orderNumber}
              onChange={(e) => setOrderNumber(e.target.value)}
            />
            <button type="submit">Track Order</button>
          </form>
        </div>

        {/* RESULTS */}
        {hasSearched && (
          <div className="track-order-status active">
            {/* HEADER */}
            <div className="track-order-header">
              <div className="track-order-info">
                <h2>Order Details</h2>
                <div className="track-order-number">
                  Order #<span>{orderNumber}</span>
                </div>
                <div className="track-order-date">
                  Placed on <span>October 20, 2025</span>
                </div>
              </div>
              <div className="track-status-badge in-transit">In Transit</div>
            </div>

            {/* TIMELINE */}
            <div className="track-shipping-timeline">
              <div className="track-timeline-title">Shipping Timeline</div>
              <div className="track-timeline">
                <div className="track-timeline-item completed">
                  <div className="track-timeline-content">
                    <h3>Order Placed</h3>
                    <div className="date">October 20, 2025 - 2:14 PM</div>
                    <div className="location">Order confirmed</div>
                  </div>
                </div>

                <div className="track-timeline-item completed">
                  <div className="track-timeline-content">
                    <h3>Processing</h3>
                    <div className="date">October 20, 2025 - 5:02 PM</div>
                    <div className="location">
                      Jerry&apos;s Warehouse, Los Angeles, CA
                    </div>
                  </div>
                </div>

                <div className="track-timeline-item current">
                  <div className="track-timeline-content">
                    <h3>In Transit</h3>
                    <div className="date">October 22, 2025 - 8:31 AM</div>
                    <div className="location">In transit to next facility</div>
                  </div>
                </div>

                <div className="track-timeline-item">
                  <div className="track-timeline-content">
                    <h3>Out for Delivery</h3>
                    <div className="date">Pending</div>
                    <div className="location">
                      Your local carrier facility
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* TRACKING INFO BOX */}
            <div className="track-tracking-info">
              <h3>Tracking Information</h3>
              <div className="track-tracking-grid">
                <div className="track-tracking-item">
                  <label>Carrier</label>
                  <span>USPS Priority Mail</span>
                </div>
                <div className="track-tracking-item">
                  <label>Tracking Number</label>
                  <span>9405 5118 9956 XXXX XXXX</span>
                </div>
                <div className="track-tracking-item">
                  <label>Estimated Delivery</label>
                  <span>October 25, 2025</span>
                </div>
                <div className="track-tracking-item">
                  <label>View on Carrier Site</label>
                  <a
                    href="https://tools.usps.com/go/TrackConfirmAction"
                    target="_blank"
                    rel="noreferrer"
                    className="track-tracking-link"
                  >
                    Track with USPS →
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
