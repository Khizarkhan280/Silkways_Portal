import { Link, useNavigate } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import FormField from "../components/FormField";
import { MailIcon } from "../components/icons";

export default function ForgotPassword() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/submit-otp");
  };

  return (
    <AuthLayout>
      <h1 className="auth-title">Reset password</h1>
      <p className="auth-subtitle">Enter your registered email address</p>

      <form onSubmit={handleSubmit} className="auth-form">
        <FormField label="Email" icon={MailIcon} name="email" type="email" placeholder="you@company.com" required />
        <button type="submit" className="btn-primary auth-submit">Send code</button>
      </form>

      <p className="auth-switch">
        <Link to="/login" className="auth-link">Back to login</Link>
      </p>
    </AuthLayout>
  );
}