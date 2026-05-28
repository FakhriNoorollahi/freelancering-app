import Card from "../../../ui/Card";
import FREELANCER_DASHBOARD_DATA from "../constants/freelancerDashboardData";

function FreelancerDashboard() {
  return (
    <div className="space-y-10">
      <h3>آمار کلی</h3>
      <div className="grid grid-cols-3 gap-10">
        {FREELANCER_DASHBOARD_DATA.map((item) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={item.id}
              label={item.label}
              IconComponent={IconComponent}
              cardClasses="col-span-3 md:col-span-2 lg:col-span-1"
            />
          );
        })}
      </div>
    </div>
  );
}

export default FreelancerDashboard;
