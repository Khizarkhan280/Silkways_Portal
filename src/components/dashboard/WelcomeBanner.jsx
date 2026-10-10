import { Link } from "react-router-dom";
import { PlusIcon } from "./DashboardIcons";

export default function WelcomeBanner() {
  return (
    <section className="welcome-banner">
      <svg className="welcome-flight" viewBox="0 0 400 260" preserveAspectRatio="xMaxYMid meet" fill="none" aria-hidden="true">
        <path d="M 20 240 Q 220 -20 400 120" stroke="currentColor" strokeOpacity="0.4"
          strokeWidth="3" strokeLinecap="round" strokeDasharray="1 12" />
        <g transform="translate(327 80) rotate(108) scale(2.2) translate(-12 -12)" fill="currentColor">
          <path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
        </g>
      </svg>

      <div className="welcome-content">
        <p className="welcome-eyebrow">Welcome to</p>
        <h1 className="welcome-title">
          Silkways <span className="welcome-accent">Cargo Portal</span>
        </h1>
        <p className="welcome-subtitle">Domestic Cargo</p>
        <p className="welcome-partners">We are Associate PIA, Shaheen, Air Blue</p>

        <Link to="/dashboard/add-bilty" className="btn-primary welcome-cta">
          <PlusIcon className="icon-sm" />
          Create New Bilty
        </Link>
      </div>
    </section>
  );
}