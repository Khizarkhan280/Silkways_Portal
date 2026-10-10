import { Link } from "react-router-dom";
import Logo from "./Logo";

export default function AuthLayout({ children }) {
  return (
    <main className="auth-bg">
      <div className="auth-shell">
        <aside className="auth-aside">
          <svg className="auth-aside-arc" viewBox="0 0 400 260" fill="none" aria-hidden="true">
            <path d="M -10 250 Q 200 20 410 170" stroke="currentColor" strokeOpacity="0.5"
              strokeWidth="3" strokeLinecap="round" strokeDasharray="1 10" />
            <g transform="translate(330 128) rotate(118) scale(1.5) translate(-12 -12)" fill="currentColor">
              <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
            </g>
          </svg>
          <div className="relative">
            <h2 className="auth-aside-title">Silkways Cargo Portal</h2>
            <p className="auth-aside-text">Domestic cargo with PIA, Shaheen and Air Blue.</p>
          </div>
        </aside>

        <div className="auth-panel">
          <Link to="/" aria-label="Home">
            <Logo className="auth-logo" />
          </Link>
          {children}
        </div>
      </div>
    </main>
  );
}