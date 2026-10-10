import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import SubmitOtp from "./pages/SubmitOtp";
import ResetPassword from "./pages/ResetPassword";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import AddBilty from "./pages/dashboard/AddBilty";
import BiltyReport from "./pages/dashboard/BiltyReport";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/submit-otp" element={<SubmitOtp />} />
      <Route path="/reset-password" element={<ResetPassword />} />

      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="add-bilty" element={<AddBilty />} />
        <Route path="bilty-report" element={<BiltyReport />} />
      </Route>
    </Routes>
  );
}