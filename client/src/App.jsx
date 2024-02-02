import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";

function App() {
  return (
    <div className="h-[1000px] pt-12">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/product" />
        <Route path="/checkout" />
        <Route path="/login" />
        <Route path="/signup" />
        <Route path="/profile" />
        <Route path="/settings" />
      </Routes>
    </div>
  );
}

export default App;
