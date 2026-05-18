import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index.jsx"
import Products from "./pages/product/index.jsx"
import Login from "./pages/login/index.jsx"
import Profile from "./pages/profile/index.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;