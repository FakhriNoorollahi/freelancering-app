import { useProposalLists } from "@/hooks/useProposal";
import FreelancerProposalRow from "./FreelancerProposalRow";
import Table from "@/ui/Table";
import Sppiner from "@/ui/Sppiner";

function FreelancerProposalas() {
  const { proposals, isPending: isGettingProposals } = useProposalLists();

  return (
    <div className="flex flex-col gap-y-10">
      <>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold lg:text-2xl lg:font-bold">
            لیست درخواست ها
          </p>
        </div>
        {isGettingProposals ? (
          <Sppiner />
        ) : proposals?.length > 0 ? (
          <Table>
            <Table.Header>
              <th>#</th>
              <th>توضیحات</th>
              <th>زمان تحویل</th>
              <th>هزینه</th>
              <th>وضعیت</th>
            </Table.Header>
            <Table.Body>
              {proposals.map((project, index) => (
                <FreelancerProposalRow
                  key={project._id}
                  {...project}
                  index={index + 1}
                />
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p> پروژه ای وجود ندارد</p>
        )}
      </>
    </div>
  );
}

export default FreelancerProposalas;
