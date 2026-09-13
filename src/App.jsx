import { Routes, Route } from "react-router-dom";
import "./App.css";

import Header from "./components/header.jsx";
import Home from "./pages/home.jsx";
import Products from "./pages/products.jsx";
import About from "./pages/about.jsx";
import ProductDetails from "./components/productDetails.jsx";

function App() {
  return (
    <div>
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
