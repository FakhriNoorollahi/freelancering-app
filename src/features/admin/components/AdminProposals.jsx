import useProposalsList from "@/hooks/useProposalsList";
import AdminProposalsRow from "./AdminProposalsRow";
import Sppiner from "@/ui/Sppiner";
import Table from "@/ui/Table";
import Empty from "@/ui/Empty";

function AdminProposals() {
  const { proposals, isPending: isGettingProposals } = useProposalsList();

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
                <AdminProposalsRow
                  key={project._id}
                  {...project}
                  index={index + 1}
                />
              ))}
            </Table.Body>
          </Table>
        ) : (
          <Empty title="پروپوزالی" />
        )}
      </>
    </div>
  );
}

export default AdminProposals;
