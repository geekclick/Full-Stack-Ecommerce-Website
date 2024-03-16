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
import ProductPage from "./pages/ProductPage";
import AdminDashboard from "./pages/AdminDashboard";
import UsersTable from "./components/AdminDashboard/UsersTable";
import VendorsTable from "./components/AdminDashboard/VendorsTable";
import FoodsTable from "./components/AdminDashboard/FoodsTable";
import Profile from "./components/AdminDashboard/Profile";
import Settings from "./components/AdminDashboard/Settings";
import LogIn from "./components/AdminDashboard/SignIn";
import Dashboard from "./components/AdminDashboard/Dashboard";

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
      <Route path="/product/:id" element={<ProductPage />} />
      <Route path="/product" />

      <Route path="/admin" element={<AdminDashboard />}>
        <Route path="/admin/" element={<Dashboard />} />
        <Route path="/admin/users" element={<UsersTable />} />
        <Route path="/admin/vendors" element={<VendorsTable />} />
        <Route path="/admin/foods" element={<FoodsTable />} />
        <Route path="/admin/profile" element={<Profile />} />
        <Route path="/admin/settings" element={<Settings />} />
      </Route>
      <Route path="/admin/login" element={<LogIn />} />

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
