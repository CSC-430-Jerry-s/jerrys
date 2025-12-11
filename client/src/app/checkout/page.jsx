// src/app/checkout/page.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function CheckoutPage() {
  const { items, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "US",
  });

  const [errors, setErrors] = useState({});
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 100 ? 0 : 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    // Address validation - THIS FIXES EXCEPTION REPORT 2
    if (!formData.address.trim()) {
      newErrors.address = "Street address is required";
    } else if (formData.address.trim().length < 5) {
      newErrors.address = "Please enter a valid street address";
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
    }
    if (!formData.state.trim()) {
      newErrors.state = "State is required";
    }
    if (!formData.zip.trim()) {
      newErrors.zip = "ZIP code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(formData.zip.trim())) {
      newErrors.zip = "Please enter a valid ZIP code (e.g., 12345)";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before proceeding
    if (!validateForm()) {
      // Scroll to first error
      const firstError = document.querySelector(".checkout-field-error");
      if (firstError) {
        firstError.scrollIntoView({ behavior: "smooth", block: "center" });
      }
      return;
    }

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      // Generate order number
      const year = new Date().getFullYear();
      const randomNum = Math.floor(10000 + Math.random() * 90000);
      const newOrderNumber = `JRY-${year}-${randomNum}`;

      // Save order to localStorage for tracking
      const orders = JSON.parse(localStorage.getItem("jerry_orders") || "[]");
      const newOrder = {
        orderNumber: newOrderNumber,
        items: items,
        total: total,
        address: formData,
        status: "processing",
        placedAt: new Date().toISOString(),
        timeline: [
          {
            status: "Order Placed",
            date: new Date().toISOString(),
            location: "Order confirmed",
            completed: true,
            current: true,
          },
          {
            status: "Processing",
            date: null,
            location: "Jerry's Warehouse, Los Angeles, CA",
            completed: false,
            current: false,
          },
          {
            status: "Shipped",
            date: null,
            location: "In transit to destination",
            completed: false,
            current: false,
          },
          {
            status: "Out for Delivery",
            date: null,
            location: "Your local carrier facility",
            completed: false,
            current: false,
          },
          {
            status: "Delivered",
            date: null,
            location: formData.address,
            completed: false,
            current: false,
          },
        ],
      };
      orders.push(newOrder);
      localStorage.setItem("jerry_orders", JSON.stringify(orders));

      setOrderNumber(newOrderNumber);
      setOrderPlaced(true);
      clearCart();
      setLoading(false);
    }, 1500);
  };

  // Redirect to cart if no items
  if (items.length === 0 && !orderPlaced) {
    return (
      <section className="checkout-page">
        <div className="checkout-empty">
          <h2>Your cart is empty</h2>
          <p>Add some items before checking out.</p>
          <Link to="/collections" className="collection-button">
            BROWSE COLLECTIONS
          </Link>
        </div>
      </section>
    );
  }

  // Order success screen
  if (orderPlaced) {
    return (
      <section className="checkout-page">
        <div className="order-success">
          <div className="success-icon">✓</div>
          <h1>Order Placed Successfully! 📦🚚</h1>
          <p className="order-number-display">
            Order ID: <strong>{orderNumber}</strong>
          </p>
          <p className="success-message">
            Thank you for your order! You will receive a confirmation email shortly.
          </p>
          <div className="success-actions">
            <Link to={`/track-order?order=${orderNumber}`} className="collection-button">
              TRACK YOUR ORDER
            </Link>
            <Link to="/collections" className="continue-shopping-link">
              Continue Shopping
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // Require login for checkout
  if (!user) {
    return (
      <section className="checkout-page">
        <div className="checkout-login-required">
          <h2>Login Required</h2>
          <p>Please log in or create an account to complete your purchase.</p>
          <div className="checkout-auth-buttons">
            <Link
              to="/login"
              state={{ from: { pathname: "/checkout" } }}
              className="collection-button"
            >
              LOGIN
            </Link>
            <Link
              to="/signup"
              state={{ from: { pathname: "/checkout" } }}
              className="signup-link"
            >
              Create Account
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="checkout-page">
      <div className="section-header">
        <h2 className="section-title">CHECKOUT</h2>
        <p className="section-description">
          Complete your order by filling in your details below.
        </p>
      </div>

      <div className="checkout-layout">
        {/* LEFT: FORM */}
        <form className="checkout-form" onSubmit={handleSubmit}>
          <div className="checkout-section">
            <h3>Contact Information</h3>

            <div className="checkout-row">
              <div className="checkout-field">
                <label htmlFor="firstName">First Name *</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={errors.firstName ? "error" : ""}
                />
                {errors.firstName && (
                  <span className="checkout-field-error">{errors.firstName}</span>
                )}
              </div>
              <div className="checkout-field">
                <label htmlFor="lastName">Last Name *</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={errors.lastName ? "error" : ""}
                />
                {errors.lastName && (
                  <span className="checkout-field-error">{errors.lastName}</span>
                )}
              </div>
            </div>

            <div className="checkout-row">
              <div className="checkout-field">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? "error" : ""}
                />
                {errors.email && (
                  <span className="checkout-field-error">{errors.email}</span>
                )}
              </div>
              <div className="checkout-field">
                <label htmlFor="phone">Phone *</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className={errors.phone ? "error" : ""}
                />
                {errors.phone && (
                  <span className="checkout-field-error">{errors.phone}</span>
                )}
              </div>
            </div>
          </div>

          <div className="checkout-section">
            <h3>Shipping Address</h3>

            <div className="checkout-field">
              <label htmlFor="address">Street Address *</label>
              <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                placeholder="123 Main St"
                className={errors.address ? "error" : ""}
              />
              {errors.address && (
                <span className="checkout-field-error">{errors.address}</span>
              )}
            </div>

            <div className="checkout-row">
              <div className="checkout-field">
                <label htmlFor="city">City *</label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={errors.city ? "error" : ""}
                />
                {errors.city && (
                  <span className="checkout-field-error">{errors.city}</span>
                )}
              </div>
              <div className="checkout-field">
                <label htmlFor="state">State *</label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  placeholder="CA"
                  className={errors.state ? "error" : ""}
                />
                {errors.state && (
                  <span className="checkout-field-error">{errors.state}</span>
                )}
              </div>
            </div>

            <div className="checkout-row">
              <div className="checkout-field">
                <label htmlFor="zip">ZIP Code *</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  value={formData.zip}
                  onChange={handleChange}
                  placeholder="12345"
                  className={errors.zip ? "error" : ""}
                />
                {errors.zip && (
                  <span className="checkout-field-error">{errors.zip}</span>
                )}
              </div>
              <div className="checkout-field">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                >
                  <option value="US">United States</option>
                </select>
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="collection-button checkout-submit-btn"
            disabled={loading}
          >
            {loading ? "PROCESSING..." : "PLACE ORDER"}
          </button>
        </form>

        {/* RIGHT: SUMMARY */}
        <aside className="checkout-summary">
          <h2>Order Summary</h2>

          <div className="checkout-items">
            {items.map((item) => (
              <div key={item.id} className="checkout-item">
                <div className="checkout-item-image">🧥</div>
                <div className="checkout-item-info">
                  <span className="checkout-item-name">{item.name}</span>
                  <span className="checkout-item-qty">Qty: {item.quantity}</span>
                </div>
                <span className="checkout-item-price">
                  ${(item.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="checkout-totals">
            <div className="checkout-total-row">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="checkout-total-row">
              <span>Shipping</span>
              <span>{shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}</span>
            </div>
            <div className="checkout-total-row">
              <span>Tax</span>
              <span>${tax.toFixed(2)}</span>
            </div>
            <div className="checkout-total-row total">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <Link to="/cart" className="checkout-edit-cart">
            ← Edit Cart
          </Link>
        </aside>
      </div>
    </section>
  );
}
