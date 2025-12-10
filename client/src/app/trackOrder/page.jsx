import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function TrackOrderPage() {
  const [searchParams] = useSearchParams();
  const [orderNumber, setOrderNumber] = useState("");
  const [hasSearched, setHasSearched] = useState(false);
  const [order, setOrder] = useState(null);
  const [error, setError] = useState("");

  // Check if there's an order number in the URL
  useEffect(() => {
    const urlOrderNumber = searchParams.get("order");
    if (urlOrderNumber) {
      setOrderNumber(urlOrderNumber);
      searchOrder(urlOrderNumber);
    }
  }, [searchParams]);

  const searchOrder = (orderNum) => {
    setError("");
    setOrder(null);
    setHasSearched(true);

    // Search in localStorage
    const orders = JSON.parse(localStorage.getItem("jerry_orders") || "[]");
    const foundOrder = orders.find(
      (o) => o.orderNumber.toLowerCase() === orderNum.toLowerCase()
    );

    if (foundOrder) {
      setOrder(foundOrder);
    } else {
      setError("Order Not Found");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) return;
    searchOrder(orderNumber.trim());
  };

  const formatDate = (dateString) => {
    if (!dateString) return "Pending";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    });
  };

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case "delivered":
        return "delivered";
      case "shipped":
      case "in-transit":
        return "in-transit";
      case "processing":
        return "processing";
      default:
        return "";
    }
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

        {/* ERROR STATE - Order Not Found */}
        {hasSearched && error && (
          <div className="track-order-status active track-error">
            <div className="track-error-content">
              <div className="track-error-icon">❌</div>
              <h2>Order Not Found</h2>
              <p>
                We couldn&apos;t find an order with the number{" "}
                <strong>{orderNumber}</strong>.
              </p>
              <p className="track-error-hint">
                Please check your order number and try again. Order numbers
                start with &quot;JRY-&quot; followed by the year and a unique
                ID.
              </p>
            </div>
          </div>
        )}

        {/* RESULTS - Order Found */}
        {hasSearched && order && (
          <div className="track-order-status active">
            {/* HEADER */}
            <div className="track-order-header">
              <div className="track-order-info">
                <h2>Order Details</h2>
                <div className="track-order-number">
                  Order #<span>{order.orderNumber}</span>
                </div>
                <div className="track-order-date">
                  Placed on <span>{formatDate(order.placedAt)}</span>
                </div>
              </div>
              <div
                className={`track-status-badge ${getStatusBadgeClass(
                  order.status
                )}`}
              >
                {order.status === "processing"
                  ? "Order Placed"
                  : order.status?.charAt(0).toUpperCase() +
                    order.status?.slice(1)}
              </div>
            </div>

            {/* TIMELINE */}
            <div className="track-shipping-timeline">
              <div className="track-timeline-title">Shipping Timeline</div>
              <div className="track-timeline">
                {order.timeline?.map((step, index) => (
                  <div
                    key={index}
                    className={`track-timeline-item ${
                      step.completed ? "completed" : ""
                    } ${step.current ? "current" : ""}`}
                  >
                    <div className="track-timeline-content">
                      <h3>{step.status}</h3>
                      <div className="date">{formatDate(step.date)}</div>
                      <div className="location">{step.location}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ORDER ITEMS */}
            <div className="track-order-items">
              <h3>Items in Your Order</h3>
              {order.items?.map((item, index) => (
                <div key={index} className="track-item">
                  <div className="track-item-image">🧥</div>
                  <div className="track-item-details">
                    <h4>{item.name}</h4>
                    <div className="track-item-meta">Qty: {item.quantity}</div>
                    <div className="track-item-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SHIPPING ADDRESS */}
            {order.address && (
              <div className="track-tracking-info">
                <h3>Shipping Address</h3>
                <div className="track-address">
                  <p>
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <p>{order.address.address}</p>
                  <p>
                    {order.address.city}, {order.address.state}{" "}
                    {order.address.zip}
                  </p>
                </div>
              </div>
            )}

            {/* TOTAL */}
            <div className="track-tracking-info">
              <h3>Order Total</h3>
              <div className="track-order-total">
                <strong>${order.total?.toFixed(2)}</strong>
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
}
