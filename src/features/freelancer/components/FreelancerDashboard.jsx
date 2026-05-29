import {
  CheckBadgeIcon,
  CurrencyDollarIcon,
  DocumentIcon,
} from "@heroicons/react/24/solid";
import { useProposalLists } from "../../../hooks/useProposal";
import Card from "../../../ui/Card";
import Sppiner from "../../../ui/Sppiner";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "../../../utils/toPersianNumber";

function FreelancerDashboard() {
  const { isProposaling, proposals } = useProposalLists();
  const accpetedProposals = proposals?.filter((p) => p.status === 2);
  const price = accpetedProposals?.reduce((acc, cur) => acc + cur.price, 0);

 
  return (
    <div className="space-y-10">
      <p className="text-xl font-semibold lg:text-2xl lg:font-bold">آمار کلی</p>
      {!isProposaling ? (
        <div className="grid grid-cols-3 gap-10">
          <Card
            label="درخواست ها"
            IconComponent={DocumentIcon}
            data={toPersianNumbers(proposals?.length)}
          />
          <Card
            label="درخواست های تایید شده"
            IconComponent={CheckBadgeIcon}
            data={toPersianNumbers(accpetedProposals?.length)}
          />
          <Card
            label="کیف پول"
            IconComponent={CurrencyDollarIcon}
            data={toPersianNumberWithComma(price)}
          />
        </div>
      ) : (
        <Sppiner />
      )}
    </div>
  );
}

export default FreelancerDashboard;
