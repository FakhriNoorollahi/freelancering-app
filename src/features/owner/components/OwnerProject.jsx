import Table from "../../../ui/Table";
import Sppiner from "../../../ui/Sppiner";
import { useProject } from "../hooks/useProject";
import OwnerProposalItem from "./OwnerProposalItem";

function OwnerProject() {
  const { project, isProjecting } = useProject();

  return (
    <div>
      <h3 className="mb-10">درخواست های پروژه ی شما</h3>
      {isProjecting ? (
        <Sppiner />
      ) : project.proposals.length ? (
        <Table>
          <Table.Header>
            <th>#</th>
            <th>فریلنسر</th>
            <th>توضیحات</th>
            <th>زمان تحویل</th>
            <th>هزینه</th>
            <th>وضعیت</th>
            <th>عملیات</th>
          </Table.Header>
          <Table.Body>
            {project.proposals.map((proposal, index) => (
              <OwnerProposalItem
                key={proposal._id}
                proposal={proposal}
                index={index}
              />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <p>پر.پوزالی وجود ندارد</p>
      )}
    </div>
  );
}
export default OwnerProject;
