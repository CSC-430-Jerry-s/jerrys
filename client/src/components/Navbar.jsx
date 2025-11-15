// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <header className="navbar">
      <div className="nav-inner">
        {/* Logo */}
        <NavLink to="/" className="nav-logo">
          JERRY&apos;S
        </NavLink>

        {/* Links */}
        <nav className="nav-links">
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/collections" className="nav-link">
            Collections
          </NavLink>
          <NavLink to="/track-order" className="nav-link">
            Track Order
          </NavLink>
        </nav>

        {/* Cart */}
        <NavLink to="/cart" className="cart-pill">
          <span className="cart-icon">🛒</span>
          <span className="cart-count">{totalItems}</span>
        </NavLink>
      </div>
    </header>
  );
}
