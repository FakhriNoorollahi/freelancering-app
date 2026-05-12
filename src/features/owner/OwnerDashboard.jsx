import {
  ComputerDesktopIcon,
  FolderIcon,
  CheckBadgeIcon,
} from "@heroicons/react/24/solid";
import OwnerDashboardItem from "./OwnerDashboardItem";

const ownerDashboardItems = [
  {
    id: 1,
    label: "پروژه ها",
    icon: <FolderIcon className="size-16 text-danger/70" />,
  },
  {
    id: 2,
    label: "پروژه های واگذار شده",
    icon: <CheckBadgeIcon className="size-16 text-success" />,
  },
  {
    id: 3,
    label: "درخواست ها",
    icon: <ComputerDesktopIcon className="size-16 text-brand-primary/70" />,
  },
];

function OwnerDashboard() {
  return (
    <div className="space-y-10">
      <h3>آمار کلی</h3>
      <div className="grid grid-cols-3 gap-10">
        {ownerDashboardItems.map((item) => (
          <OwnerDashboardItem
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

export default OwnerDashboard;
