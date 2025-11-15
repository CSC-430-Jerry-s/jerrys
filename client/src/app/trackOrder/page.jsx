// src/app/trackOrder/page.jsx

export default function TrackOrderPage() {
  return (
    <main className="track-page">
      <div className="container">
        {/* Search / input section */}
        <section className="search-section">
          <h1>Track Your Order</h1>
          <p>
            Enter your order number to see where your package is right now and
            when it&apos;s expected to arrive.
          </p>

          <div className="search-row">
            <input
              type="text"
              className="order-input"
              placeholder="Enter your order number (e.g. JRY-2024-10453)"
            />
            <button className="order-button">Track Order</button>
          </div>

          <div className="sample-orders">
            Try sample orders: <strong>JRY-2024-10453</strong> or{" "}
            <strong>JRY-2024-10891</strong>
          </div>
        </section>

        {/* Main layout: status + timeline + updates */}
        <section className="status-layout">
          {/* Current status card */}
          <article className="status-card">
            <h2>Current Status</h2>
            <p className="status-label in-transit">In Transit</p>
            <p className="status-text">
              Your order has left the warehouse and is traveling to the local
              carrier facility.
            </p>

            <ul className="status-meta">
              <li>
                <span>Order</span>
                <span>JRY-2024-10453</span>
              </li>
              <li>
                <span>Carrier</span>
                <span>UPS Ground</span>
              </li>
              <li>
                <span>Estimated Delivery</span>
                <span>Nov 21–23</span>
              </li>
              <li>
                <span>Destination</span>
                <span>Staten Island, NY</span>
              </li>
            </ul>
          </article>

          {/* Timeline card */}
          <article className="timeline-card">
            <h2>Shipping Timeline</h2>
            <ul className="timeline">
              <li className="timeline-step done">
                <span className="dot" />
                <div>
                  <div className="step-title">Order Placed</div>
                  <div className="step-meta">Nov 15 · 3:12 PM</div>
                </div>
              </li>
              <li className="timeline-step done">
                <span className="dot" />
                <div>
                  <div className="step-title">Order Confirmed</div>
                  <div className="step-meta">Nov 15 · 3:20 PM</div>
                </div>
              </li>
              <li className="timeline-step done">
                <span className="dot" />
                <div>
                  <div className="step-title">Shipped</div>
                  <div className="step-meta">Nov 16 · 9:42 AM</div>
                </div>
              </li>
              <li className="timeline-step current">
                <span className="dot" />
                <div>
                  <div className="step-title">In Transit</div>
                  <div className="step-meta">
                    At carrier facility · Newark, NJ
                  </div>
                </div>
              </li>
              <li className="timeline-step">
                <span className="dot" />
                <div>
                  <div className="step-title">Out for Delivery</div>
                  <div className="step-meta">Pending</div>
                </div>
              </li>
              <li className="timeline-step">
                <span className="dot" />
                <div>
                  <div className="step-title">Delivered</div>
                  <div className="step-meta">Pending</div>
                </div>
              </li>
            </ul>
          </article>

          {/* Collection updates / marketing card */}
          <aside className="updates-card">
            <h2>Collection Updates</h2>
            <p>
              While your order is on the way, check what just dropped in this
              collection.
            </p>

            <ul className="updates-list">
              <li>New heavyweight hoodies in charcoal and bone.</li>
              <li>Utility cargos restocked in washed olive.</li>
              <li>Limited graphic tees added to the archive.</li>
            </ul>

            <a href="/collections" className="updates-link">
              View Collections →
            </a>
          </aside>
        </section>
      </div>

      <footer className="footer">
        <p>© 2025 JERRY&apos;S STREETWEAR. ALL RIGHTS RESERVED.</p>
      </footer>
    </main>
  );
}

