import Table from "../../ui/Table";

const status = [
  { id: 1, label: "در انتظار تایید", classes: "bg-tag" },
  { id: 1, label: "تایید شده", classes: "bg-success" },
  { id: 1, label: "رد شده", classes: "bg-danger" },
];

function OwnerProjectItem() {
  return (
    <Table.Row>
      <td>1</td>
      <td>نورا</td>
      <td>در 5 روز با بهترین هزینه</td>
      <td>{new Date().toLocaleString("fa")}</td>
      <td>250000</td>
      <td>
        <div>{status[0].label}</div>
      </td>
      <td>عملیات</td>
    </Table.Row>
  );
}

export default OwnerProjectItem;
