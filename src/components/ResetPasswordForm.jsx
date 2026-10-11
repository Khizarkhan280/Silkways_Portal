import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PasswordField from "./PasswordField";

export default function ResetPasswordForm() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const mismatch = confirm !== "" && password !== confirm;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirm) return;
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <PasswordField
        label="New password"
        name="newPassword"
        placeholder="Enter new password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <PasswordField
        label="Confirm password"
        name="confirmPassword"
        placeholder="Re-enter new password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
        aria-invalid={mismatch}
        required
      />

      {mismatch && (
        <p className="auth-error" role="alert">
          Passwords do not match.
        </p>
      )}

      <button type="submit" className="btn-primary auth-submit">
        Reset password
      </button>
    </form>
  );
}