import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import ManageSIM from "./pages/ManageSIM.jsx";
import PaymentMethod from "./pages/PaymentMethod.jsx";
import PaymentHistory from "./pages/PaymentHistory.jsx";
import MyProfile from "./pages/MyProfile.jsx";
import Login from "./pages/Login";
import Register from "./pages/Register";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/manage-sim" element={<ManageSIM />} />
        <Route path="/payment-method" element={<PaymentMethod />} />
        <Route path="/payment-history" element={<PaymentHistory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
