import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import OtpFields from "../components/OtpFields";

export default function SubmitOtp() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <AuthLayout>
      <h1 className="auth-title">Enter the code</h1>
      <p className="auth-subtitle">Enter the 6-digit code sent to your email</p>

      <form onSubmit={handleSubmit} className="auth-form">
        <OtpFields />
        <button type="submit" className="btn-primary auth-submit">Continue</button>
      </form>

      <p className="auth-switch">
        <Link to="/forgot-password" className="auth-link">Change email</Link>
      </p>
    </AuthLayout>
  );
}