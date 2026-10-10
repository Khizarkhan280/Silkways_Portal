import { Link } from "react-router-dom";
import { ArrowRightIcon } from "./DashboardIcons";

export default function QuickActionCard({ to, icon: Icon, title, description }) {
  return (
    <Link to={to} className="dash-card group">
      <span className="dash-card-icon">
        <Icon className="h-6 w-6" />
      </span>
      <span className="dash-card-text">
        <span className="dash-card-title">{title}</span>
        <span className="dash-card-desc">{description}</span>
      </span>
      <ArrowRightIcon className="dash-card-arrow" />
    </Link>
  );
}