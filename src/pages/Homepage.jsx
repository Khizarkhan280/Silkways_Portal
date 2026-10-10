import { Link } from "react-router-dom";
import Logo from "../components/Logo";
import FlightPath from "../components/FlightPath";
import { ArrowIcon } from "../components/icons";

export default function Homepage() {
  return (
    <main className="home-page">
      <header className="home-header">
        <Logo className="home-logo" />
      </header>

      <FlightPath />

      <section className="home-hero">
        <h1 className="home-title">Welcome to Silkways Cargo Portal</h1>
        <p className="home-subtitle">Domestic Cargo</p>
        <p className="home-partners">We are Associate PIA, Shaheen, Air Blue</p>

        <Link to="/register" className="btn-primary group home-cta">
          Login
          <ArrowIcon className="home-cta-icon" />
        </Link>
      </section>
    </main>
  );
}