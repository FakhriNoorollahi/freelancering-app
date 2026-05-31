import {
  ComputerDesktopIcon,
  FolderIcon,
  UsersIcon,
} from "@heroicons/react/16/solid";
import { useProposalLists } from "../../../hooks/useProposal";
import useUser from "../hooks/useUser";
import Card from "../../../ui/Card";
import { toPersianNumbers } from "../../../utils/toPersianNumber";
import Sppiner from "../../../ui/Sppiner";
import { useProjectLists } from "../../../hooks/useOwner";

function AdminDashboard() {
  const { projects, isPending: isProjecting } = useProjectLists();
  const { isProposaling, proposals } = useProposalLists();
  const { users, isUsering } = useUser();

  const isLoading = isProjecting || isProposaling || isUsering;

  return (
    <div className="space-y-10">
      <p className="text-xl font-semibold lg:text-2xl lg:font-bold">آمار کلی</p>
      {!isLoading ? (
        <div className="grid grid-cols-3 gap-4">
          <Card
            label="کاربران"
            IconComponent={UsersIcon}
            data={toPersianNumbers(users?.length)}
          />
          <Card
            label="پروژه ها"
            IconComponent={FolderIcon}
            data={toPersianNumbers(projects?.length)}
          />
          <Card
            label="درخواست ها"
            IconComponent={ComputerDesktopIcon}
            data={toPersianNumbers(proposals?.length)}
          />
        </div>
      ) : (
        <Sppiner />
      )}
    </div>
  );
}

export default AdminDashboard;
