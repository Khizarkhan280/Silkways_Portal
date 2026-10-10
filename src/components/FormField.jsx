export default function FormField({ label, icon: Icon, ...inputProps }) {
  return (
    <label className="block">
      <span className="auth-label">{label}</span>
      <span className="auth-input">
        <Icon />
        <input className="auth-input-field" {...inputProps} />
      </span>
    </label>
  );
}