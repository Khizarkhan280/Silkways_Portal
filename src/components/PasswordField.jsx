import { useState } from "react";
import { LockIcon, EyeIcon, EyeOffIcon } from "./icons";

export default function PasswordField({ label, ...inputProps }) {
  const [show, setShow] = useState(false); // default: hidden

  return (
    <label className="block">
      <span className="auth-label">{label}</span>
      <span className="auth-input">
        <LockIcon />
        <input
          className="auth-input-field"
          type={show ? "text" : "password"}
          {...inputProps}
        />
        <button
          type="button"
          className="auth-eye"
          onClick={() => setShow((prev) => !prev)}
          aria-label={show ? "Hide password" : "Show password"}
          aria-pressed={show}
        >
          {show ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </span>
    </label>
  );
}