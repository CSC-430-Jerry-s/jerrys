// src/app/products/page.jsx
import { useCart } from "../../context/CartContext.jsx";

const PRODUCTS = [
  {
    id: 1,
    name: "Boxy Logo Tee",
    price: 40,
    color: "Black",
    tag: "Core",
    img: "https://via.placeholder.com/400x500?text=Boxy+Logo+Tee",
  },
  {
    id: 2,
    name: "Heavyweight Hoodie",
    price: 85,
    color: "Bone",
    tag: "Fall Drop",
    img: "https://via.placeholder.com/400x500?text=Hoodie",
  },
  {
    id: 3,
    name: "Utility Cargo Pants",
    price: 90,
    color: "Olive",
    tag: "Core",
    img: "https://via.placeholder.com/400x500?text=Cargos",
  },
  {
    id: 4,
    name: "Washed Denim Jacket",
    price: 120,
    color: "Indigo",
    tag: "Limited",
    img: "https://via.placeholder.com/400x500?text=Denim+Jacket",
  },
];

export default function ProductsPage() {
  const { addItem } = useCart();

  return (
    <div className="page products-page">
      <header className="page-header">
        <h1>Products</h1>
        <p>Mix seasonal drops with core staples to build your fit.</p>
      </header>

      <section className="product-grid">
        {PRODUCTS.map((product) => (
          <article key={product.id} className="product-card">
            <div className="product-image-wrapper">
              <img
                src={product.img}
                alt={product.name}
                className="product-image"
              />
              <span className="product-tag">{product.tag}</span>
            </div>
            <div className="product-body">
              <h2 className="product-name">{product.name}</h2>
              <p className="product-meta">{product.color}</p>
              <div className="product-footer">
                <span className="product-price">${product.price}</span>
                <button
                  className="product-add"
                  onClick={() =>
                    addItem({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      color: product.color,
                    })
                  }
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
