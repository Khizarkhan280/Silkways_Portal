import AuthLayout from "../components/AuthLayout";
import ResetPasswordForm from "../components/ResetPasswordForm";

export default function ResetPassword() {
  return (
    <AuthLayout>
      <h1 className="auth-title">New password</h1>
      <p className="auth-subtitle">Choose a new password for your account</p>

      <ResetPasswordForm />
    </AuthLayout>
  );
}