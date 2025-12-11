// src/app/components/Navbar.jsx
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";
import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { items } = useCart();
  const { user, logout } = useAuth();
  const [badgeAnimating, setBadgeAnimating] = useState(false);
  const prevCountRef = useRef(0);

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  // Animate badge when cart count changes
  useEffect(() => {
    if (cartCount !== prevCountRef.current) {
      setBadgeAnimating(true);
      const timer = setTimeout(() => setBadgeAnimating(false), 500);
      prevCountRef.current = cartCount;
      return () => clearTimeout(timer);
    }
  }, [cartCount]);

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/collections" && location.pathname.startsWith("/collections"));

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          JERRY&apos;S
        </Link>
      </div>

      <ul className="nav-links">
        <li>
          <Link className={isActive("/") ? "active" : ""} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/collections") ? "active" : ""}
            to="/collections"
          >
            Collections
          </Link>
        </li>
        <li>
          <Link
            className={isActive("/track-order") ? "active" : ""}
            to="/track-order"
          >
            Track Order
          </Link>
        </li>
      </ul>

      <div className="nav-right">
        {user ? (
          <div className="user-menu">
            <span className="user-greeting">Hi, {user.firstName || user.email.split("@")[0]}</span>
            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Link to="/login" className="login-link">
            Login
          </Link>
        )}

        <Link to="/cart" className="cart-icon">
          <span style={{ fontSize: "1.5rem", color: "var(--cinereous)" }}>🛒</span>
          <span className={`cart-badge ${badgeAnimating ? "updated" : ""}`}>
            {cartCount}
          </span>
        </Link>
      </div>
    </nav>
  );
}
