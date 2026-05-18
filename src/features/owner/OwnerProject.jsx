import { useParams } from "react-router-dom";
import Table from "../../ui/Table";
import { useOwnerProject } from "../../hooks/useOwner";
import Sppiner from "../../ui/Sppiner";
import OwnerProposalItem from "./OwnerProposalItem";

function OwnerProject() {
  const { id } = useParams();
  const { project, isPending } = useOwnerProject(id);

  return (
    <div>
      <h4 className="mb-4">درخواست های پروژه ی شما</h4>
      {isPending ? (
        <Sppiner />
      ) : project.proposals ? (
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
                {...proposal}
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
