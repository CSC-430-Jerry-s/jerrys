// src/app/shoppingCart/page.jsx
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function ShoppingCartPage() {
  const { items, updateQuantity, removeItem } = useCart();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // EMPTY STATE
  if (items.length === 0) {
    return (
      <section className="cart-page">
        <div className="section-header">
          <h2 className="section-title">YOUR CART IS EMPTY</h2>
          <p className="section-description">
            Start with a hoodie, tee, or pair of cargos from the latest drop.
          </p>
          <Link to="/collections" className="collection-button">
            BROWSE COLLECTIONS
          </Link>
        </div>
      </section>
    );
  }

  // CART WITH ITEMS
  return (
    <section className="cart-page">
      <div className="section-header">
        <h2 className="section-title">SHOPPING CART</h2>
        <p className="section-description">
          Review your picks before checkout.
        </p>
      </div>

      <div className="cart-layout">
        {/* LEFT: ITEMS */}
        <div className="cart-items">
          {items.map((item) => {
            const lineTotal = item.price * item.quantity;

            return (
              <div key={item.id} className="cart-item">
                {/* small placeholder image box */}
                <div className="cart-item-image">🧥</div>

                <div className="cart-item-info">
                  <div>
                    <h3 className="cart-item-name">{item.name}</h3>
                    <p className="cart-item-price">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>

                  <div className="cart-item-controls">
                    <div className="cart-qty-control">
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(
                            item.id,
                            Math.max(1, item.quantity - 1)
                          )
                        }
                      >
                        −
                      </button>
                      <input
                        type="number"
                        min="1"
                        value={item.quantity}
                        onChange={(e) =>
                          updateQuantity(
                            item.id,
                            Math.max(1, Number(e.target.value) || 1)
                          )
                        }
                      />
                      <button
                        type="button"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </div>

                    <button
                      type="button"
                      className="cart-remove"
                      onClick={() => removeItem(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>

                <div className="cart-item-subtotal">
                  ${lineTotal.toFixed(2)}
                </div>
              </div>
            );
          })}
        </div>

        {/* RIGHT: SUMMARY */}
        <aside className="cart-summary">
          <h2>Order Summary</h2>

          <div className="cart-summary-row">
            <span>Subtotal</span>
            <span>${total.toFixed(2)}</span>
          </div>
          <div className="cart-summary-row">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>

          <div className="cart-summary-total">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button className="collection-button cart-checkout-btn" disabled>
            CHECKOUT (COMING SOON)
          </button>

          <Link to="/collections" className="cart-continue">
            ← Continue shopping
          </Link>
        </aside>
      </div>
    </section>
  );
}
