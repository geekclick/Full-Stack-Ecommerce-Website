import "./App.css";
import { Routes, Route } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import OrderSummary from "./pages/OrderSummary";
import MyAccount from "./pages/MyAccount";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ForgotPassword from "./pages/ForgotPassword";
import EnterOtp from "./pages/EnterOtp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/wishlist" element={<Wishlist />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/payment" element={<Payment />} />
      <Route path="/order-summary" element={<OrderSummary />} />
      <Route path="/my-account" element={<MyAccount />} />
      <Route path="/product" />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/enter-otp" element={<EnterOtp />} />
      <Route path="/profile" />
      <Route path="/settings" />
    </Routes>
  );
}

export default App;
