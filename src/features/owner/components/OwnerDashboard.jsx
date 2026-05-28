import Card from "../../../ui/Card";
import ownerDashboardData from "../constants/ownerDashboradData";

function OwnerDashboard() {
  return (
    <div className="space-y-10">
      <p className="text-xl font-semibold lg:text-2xl lg:font-bold">آمار کلی</p>
      <div className="grid grid-cols-3 gap-4">
        {ownerDashboardData.map((item) => {
          const IconComponent = item.icon;
          return (
            <Card
              key={item.id}
              label={item.label}
              IconComponent={IconComponent}
            />
          );
        })}
      </div>
    </div>
  );
}

export default OwnerDashboard;
