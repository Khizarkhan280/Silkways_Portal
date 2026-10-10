import { useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import { LockIcon } from "../components/icons";

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
        <FormField label="New password" icon={LockIcon} name="newPassword" type="password" placeholder="Enter new password" required />
        <button type="submit" className="btn-primary auth-submit">Reset password</button>
      </form>
    </AuthLayout>
  );
}