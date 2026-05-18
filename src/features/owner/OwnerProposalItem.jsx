import Table from "../../ui/Table";
import Tag from "../../ui/Tag";

const statusOptions = [
  { id: 0, label: "رد شده", classes: "bg-danger" },
  { id: 1, label: "در انتظار تایید", classes: "bg-border" },
  { id: 2, label: "تایید شده", classes: "bg-success" },
];

function OwnerProposalItem({
  user,
  status,
  price,
  duration,
  description,
  index,
}) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td>{user.name}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{price}</td>
      <td>
        <Tag classes={`mx-auto ${statusOptions[status].classes}`}>
          {statusOptions[status].label}
        </Tag>
      </td>
      <td>عملیات</td>
    </Table.Row>
  );
}

export default OwnerProposalItem;
