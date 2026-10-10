import { Link } from "react-router-dom";
import { MenuIcon, LogoutIcon } from "./DashboardIcons";

export default function Topbar({ onMenu }) {
  return (
    <header className="topbar">
      <button type="button" onClick={onMenu} className="icon-btn" aria-label="Open menu">
        <MenuIcon />
      </button>

      <Link to="/login" className="btn-outline topbar-logout">
        <LogoutIcon className="icon-sm" />
        Logout
      </Link>
    </header>
  );
}