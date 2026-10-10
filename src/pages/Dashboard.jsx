import WelcomeBanner from "../components/WelcomeBanner";
import QuickActionCard from "../components/QuickActionCard";
import { DocPlusIcon, ReportIcon } from "../components/DashboardIcons";

export default function Dashboard() {
  return (
    <div className="dash-stack">
      <WelcomeBanner />

      <div className="dash-grid">
        <QuickActionCard
          to="/dashboard/add-bilty"
          icon={DocPlusIcon}
          title="Add Bilty"
          description="Create a new bilty for shipment"
        />
        <QuickActionCard
          to="/dashboard/bilty-report"
          icon={ReportIcon}
          title="Bilty Report"
          description="View and manage all bilty reports"
        />
      </div>
    </div>
  );
}