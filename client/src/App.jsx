// src/App.jsx
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { CartProvider } from "./app/context/CartContext";
import Navbar from "./app/components/Navbar";
import Homepage from "./app/homepage/page.jsx";
import CollectionsPage from "./app/collections/page.jsx";
import ProductsPage from "./app/products/page.jsx";
import ProductDetailPage from "./app/product/ProductDetailPage.jsx";
import ShoppingCartPage from "./app/shoppingCart/page.jsx";
import TrackOrderPage from "./app/trackOrder/page.jsx";

export default function App() {
  return (
    <CartProvider>
      <div className="app-root">
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/collections" element={<CollectionsPage />} />
          <Route path="/collections/:collectionId" element={<ProductsPage />} />
          <Route
            path="/collections/:collectionId/:productId"
            element={<ProductDetailPage />}
          />

          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
        </Routes>
      </div>
    </CartProvider>
  );
}
