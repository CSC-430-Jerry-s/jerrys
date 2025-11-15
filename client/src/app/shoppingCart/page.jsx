// src/app/shoppingCart/page.jsx
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext.jsx";

export default function ShoppingCartPage() {
  const navigate = useNavigate();
  const { items, removeItem, updateQuantity, subtotal } = useCart();

  const handleContinueShopping = () => {
    navigate("/collections");
  };

  const handleCheckout = () => {
    // not functional yet – just a placeholder
    alert("Checkout flow coming soon 🙂");
  };

  return (
    <div className="page cart-page">
      <header className="page-header">
        <h1>Shopping Cart</h1>
        <p>Review your items before checking out.</p>
      </header>

      {items.length === 0 ? (
        <div className="cart-empty">
          <p>Your cart is empty.</p>
          <button className="btn-secondary" onClick={handleContinueShopping}>
            ← Continue Shopping
          </button>
        </div>
      ) : (
        <>
          <section className="cart-layout">
            <div className="cart-items">
              {items.map((item) => (
                <article key={item.id} className="cart-item">
                  <div className="cart-item-main">
                    <div>
                      <h2 className="cart-item-name">{item.name}</h2>
                      {item.color && (
                        <p className="cart-item-meta">{item.color}</p>
                      )}
                    </div>
                    <button
                      className="cart-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>

                  <div className="cart-item-bottom">
                    <div className="cart-qty-controls">
                      <button
                        className="qty-button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min={1}
                        className="qty-input"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.id,
                            Number(e.target.value) || 1
                          )
                        }
                      />
                      <button
                        className="qty-button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="cart-item-price">
                      ${item.price * item.quantity}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <aside className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${subtotal}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${subtotal}</span>
              </div>
            </aside>
          </section>

          <section className="cart-actions">
            <button
              className="btn-secondary"
              onClick={handleContinueShopping}
            >
              ← Continue Shopping
            </button>
            <button className="btn-primary" onClick={handleCheckout}>
              Checkout
            </button>
          </section>
        </>
      )}
    </div>
  );
}
