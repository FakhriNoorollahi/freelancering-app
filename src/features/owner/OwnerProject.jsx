import { useParams } from "react-router-dom";
import Table from "../../ui/Table";
import OwnerProjectItem from "./ownerProjectItem";
import { useOwnerProject } from "../../hooks/useOwner";
import Sppiner from "../../ui/Sppiner";

function OwnerProject() {
  const { id } = useParams();
  const { data, isPending } = useOwnerProject(id);
  const { proposals } = data || {};

  return (
    <div>
      <h4 className="mb-4">درخواست های پروژه ی شما</h4>
      {isPending ? (
        <Sppiner />
      ) : proposals ? (
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
            {proposals.map((proposal) => (
              <OwnerProjectItem key={proposal._id} {...proposal} />
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
