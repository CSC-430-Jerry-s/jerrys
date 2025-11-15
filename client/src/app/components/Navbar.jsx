// src/app/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useCart } from "../context/CartContext";

export default function Navbar() {
  const location = useLocation();
  const { items } = useCart();

  const cartCount = items.reduce((sum, item) => sum + item.quantity, 0);

  const isActive = (path) =>
    location.pathname === path ||
    (path === "/collections" && location.pathname.startsWith("/collections"));

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

      <Link to="/cart" className="cart-icon">
        <span style={{ fontSize: "1.5rem", color: "var(--cinereous)" }}>🛒</span>
        <span className="cart-badge">{cartCount}</span>
      </Link>
    </nav>
  );
}
