import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import PasswordField from "../components/PasswordField";
import { MailIcon } from "../components/icons";

export default function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/dashboard");
  };

  return (
    <AuthLayout>
      <h1 className="auth-title">Login</h1>
      <p className="auth-subtitle">Login to your account!</p>

      <form onSubmit={handleSubmit} className="auth-form">
        <FormField label="Email" icon={MailIcon} name="email" type="email" placeholder="you@company.com" required />
        <PasswordField label="Password" name="password" placeholder="Enter your password" required />
        <Link to="/forgot-password" className="auth-link auth-link-end">Forgot password?</Link>
        <button type="submit" className="btn-primary auth-submit">Login</button>
      </form>

      <p className="auth-switch">
        Don't have an account? <Link to="/register" className="auth-link">Sign up</Link>
      </p>
    </AuthLayout>
  );
}