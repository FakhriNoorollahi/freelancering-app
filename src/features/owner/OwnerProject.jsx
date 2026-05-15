import Table from "../../ui/Table";
import OwnerProjectItem from "./ownerProjectItem";

function OwnerProject() {
  return (
    <div>
      <h4 className="mb-4">درخواست های پروژه ی شما</h4>
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
          <OwnerProjectItem />
        </Table.Body>
      </Table>
    </div>
  );
}
export default OwnerProject;
