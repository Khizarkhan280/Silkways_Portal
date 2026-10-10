import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import PasswordField from "../components/PasswordField";

export default function ResetPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <AuthLayout>
      <h1 className="auth-title">New password</h1>
      <p className="auth-subtitle">Choose a new password for your account</p>

      <form onSubmit={handleSubmit} className="auth-form">
        <PasswordField label="New password" name="newPassword" placeholder="Enter new password" required />
        <PasswordField label="Confirm password" name="confirmPassword" placeholder="Re-enter new password" required />
        <button type="submit" className="btn-primary auth-submit">Reset password</button>
      </form>
    </AuthLayout>
  );
}