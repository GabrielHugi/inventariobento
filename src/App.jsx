import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home/index.jsx";
import Products from "./pages/products/index.jsx";
import ProductPage from "./pages/product/index.jsx";
import Login from "./pages/login/index.jsx";
import Profile from "./pages/profile/index.jsx";
import Cadastro from "./pages/cadastro/index.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/products" element={<Products />} />

        {/* PRODUCT PAGE */}
        <Route path="/product/:id" element={<ProductPage />} />

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;