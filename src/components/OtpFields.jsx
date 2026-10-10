export default function OtpFields({ length = 6 }) {
  return (
    <div className="otp-row">
      {Array.from({ length }, (_, i) => (
        <input
          key={i}
          className="otp-box"
          type="text"
          inputMode="numeric"
          maxLength={1}
          aria-label={`Digit ${i + 1}`}
          required
        />
      ))}
    </div>
  );
}