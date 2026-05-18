import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx"
import Products from "./pages/product/index.jsx"
import Login from "./pages/login/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;