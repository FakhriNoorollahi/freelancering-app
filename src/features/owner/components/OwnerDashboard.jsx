import {
  CheckBadgeIcon,
  ComputerDesktopIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import Card from "../../../ui/Card";
import { useOwnerProjects } from "../../../hooks/useOwnerProjects";
import Sppiner from "../../../ui/Sppiner";

function OwnerDashboard() {
  const { allProjects, isPending } = useOwnerProjects();
  const completedProjects = allProjects?.reduce(
    (acc, cur) => acc + !!cur.freelancer,
    0,
  );

  const proposals = allProjects?.reduce(
    (acc, cur) => acc + cur.proposals.length,
    0,
  );

  return (
    <div className="space-y-10">
      <p className="text-xl font-semibold lg:text-2xl lg:font-bold">آمار کلی</p>
      {!isPending ? (
        <div className="grid grid-cols-3 gap-3">
          <Card
            label="پروژه ها"
            IconComponent={FolderIcon}
            data={allProjects.length}
          />
          <Card
            label="پروژه های واگذار شده"
            IconComponent={CheckBadgeIcon}
            data={completedProjects}
          />
          <Card
            label="درخواست ها"
            IconComponent={ComputerDesktopIcon}
            data={proposals}
          />
        </div>
      ) : (
        <Sppiner />
      )}
    </div>
  );
}

export default OwnerDashboard;
