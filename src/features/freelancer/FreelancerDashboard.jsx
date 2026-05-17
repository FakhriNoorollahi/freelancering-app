import {
  FolderIcon,
  CheckBadgeIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/solid";
import DashboardItem from "../../ui/DashboardOtem";

const freelancerDashboardItems = [
  {
    id: 1,
    label: "درخواست ها",
    icon: <FolderIcon className="size-16 text-brand-secondary" />,
  },
  {
    id: 2,
    label: "درخواست های تایید شده",
    icon: <CheckBadgeIcon className="size-16 text-brand-secondary" />,
  },
  {
    id: 3,
    label: "کیف پول",
    icon: <CurrencyDollarIcon className="size-16 text-brand-secondary" />,
  },
];

function FreelancerDashboard() {
  return (
    <div className="space-y-10">
      <h3>آمار کلی</h3>
      <div className="grid grid-cols-3 gap-10">
        {freelancerDashboardItems.map((item) => (
          <DashboardItem
            key={item.id}
            label={item.label}
            icon={item.icon}
            itemClass={item.itemClass}
          />
        ))}
      </div>
    </div>
  );
}

export default FreelancerDashboard;
