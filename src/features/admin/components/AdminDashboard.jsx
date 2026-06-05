import {
  ComputerDesktopIcon,
  FolderIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import useUsers from "../hooks/useUsers";
import Card from "@/ui/Card";
import Sppiner from "@/ui/Sppiner";
import { useProjectsList } from "@/hooks/useProjectsList";
import useProposalsList from "@/hooks/useProposalsList";

function AdminDashboard() {
  const { projects, isProjectingList } = useProjectsList();
  const { isProposaling, proposals } = useProposalsList();
  const { users, isUsering } = useUsers();

  const isLoading = isProjectingList || isProposaling || isUsering;

  return (
    <div className="space-y-10">
      <p className="text-xl font-semibold lg:text-2xl lg:font-bold">
        خلاصه آمار
      </p>
      {!isLoading ? (
        <div className="grid grid-cols-3 gap-3">
          <Card
            label="کاربران"
            IconComponent={UsersIcon}
            data={users?.length}
          />
          <Card
            label="پروژه ها"
            IconComponent={FolderIcon}
            data={projects?.length}
          />
          <Card
            label="درخواست ها"
            IconComponent={ComputerDesktopIcon}
            data={proposals?.length}
          />
        </div>
      ) : (
        <Sppiner />
      )}
    </div>
  );
}

export default AdminDashboard;
