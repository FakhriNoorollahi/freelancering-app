import ownerDashboardData from "../constants/ownerDashboradData";
import OwnerDashboardItem from "./OwnerDashboardItem";

function OwnerDashboard() {
  return (
    <div className="space-y-10">
      <h3>آمار کلی</h3>
      <div className="dashboard-container">
        {ownerDashboardData.map((item) => {
          const IconComponent = item.icon;
          return (
            <OwnerDashboardItem
              key={item.id}
              label={item.label}
              IconComponent={IconComponent}
              itemClass={item.itemClass}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OwnerDashboard;
