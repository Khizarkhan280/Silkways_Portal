import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

export default function DashboardLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="dash-shell">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="dash-body">
        <Topbar onMenu={() => setMenuOpen(true)} />
        <main className="dash-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}