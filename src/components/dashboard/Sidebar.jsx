import { NavLink, Link } from "react-router-dom";
import Logo from "../Logo";
import { HomeIcon, DocPlusIcon, ReportIcon } from "./DashboardIcons";

const linkClass = ({ isActive }) => (isActive ? "nav-item nav-item-active" : "nav-item");

export default function Sidebar({ open, onClose }) {
  return (
    <>
      {open && <div className="sidebar-overlay" onClick={onClose} aria-hidden="true" />}

      <aside className={open ? "sidebar sidebar-open" : "sidebar"}>
        <Link to="/dashboard" onClick={onClose} className="sidebar-logo" aria-label="Dashboard home">
          <Logo className="sidebar-logo-img" />
        </Link>

        <nav className="nav-list" aria-label="Main">
          <NavLink to="/dashboard" end onClick={onClose} className={linkClass}>
            <HomeIcon /> Dashboard
          </NavLink>
          <NavLink to="/dashboard/add-bilty" onClick={onClose} className={linkClass}>
            <DocPlusIcon /> Add Bilty
          </NavLink>
          <NavLink to="/dashboard/bilty-report" onClick={onClose} className={linkClass}>
            <ReportIcon /> Bilty Report
          </NavLink>
        </nav>

        <div className="sidebar-footer">
          <p className="sidebar-tagline">Your Cargo</p>
          <p className="sidebar-tagline-accent">Our Priority</p>
        </div>
      </aside>
    </>
  );
}