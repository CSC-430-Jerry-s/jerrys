// src/App.jsx
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar.jsx";

import Homepage from "./app/homepage/page.jsx";
import CollectionsPage from "./app/collections/page.jsx";
import SeasonProductsPage from "./app/collections/SeasonProductsPage.jsx";
import ProductDetailPage from "./app/product/ProductDetailPage.jsx";
import ShoppingCartPage from "./app/shoppingCart/page.jsx";
import TrackOrderPage from "./app/trackOrder/page.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="app-main">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/collections" element={<CollectionsPage />} />
          {/* products for a specific season */}
          <Route
            path="/collections/:seasonId"
            element={<SeasonProductsPage />}
          />
          {/* item details for a specific product */}
          <Route path="/product/:productId" element={<ProductDetailPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/track-order" element={<TrackOrderPage />} />
        </Routes>
      </main>
    </div>
  );
}



