import { useProposalLists } from "../../../hooks/useProposal";
import Sppiner from "../../../ui/Sppiner";
import Table from "../../../ui/Table";
import FreelancerProposalsItem from "./FreelancerProposalsItem";

function FreelancerProposalas() {
  const { proposals, isPending: isGettingProposals } = useProposalLists();

  return (
    <div className="flex flex-col gap-y-10">
      <>
        <div className="flex justify-between items-center">
          <h3>لیست درخواست ها</h3>
        </div>
        {isGettingProposals ? (
          <Sppiner />
        ) : proposals.length > 0 ? (
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
                <FreelancerProposalsItem
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
