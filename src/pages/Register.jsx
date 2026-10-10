import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import PasswordField from "../components/PasswordField";
import { UserIcon, MailIcon } from "../components/icons";

export default function Register() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/login");
  };

  return (
    <AuthLayout>
      <h1 className="auth-title">Create Account</h1>
      <p className="auth-subtitle">Create your account</p>

      <form onSubmit={handleSubmit} className="auth-form">
        <FormField label="Full name" icon={UserIcon} name="name" type="text" placeholder="Your full name" required />
        <FormField label="Email" icon={MailIcon} name="email" type="email" placeholder="you@company.com" required />
        <PasswordField label="Password" name="password" placeholder="Enter your password" required />
        <button type="submit" className="btn-primary auth-submit">Sign Up</button>
      </form>

      <p className="auth-switch">
        Already have an account? <Link to="/login" className="auth-link">Login here</Link>
      </p>
    </AuthLayout>
  );
}