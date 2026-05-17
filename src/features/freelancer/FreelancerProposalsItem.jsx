import Table from "../../ui/Table";

const proposalsStatus = [
  { id: 1, label: "رد شده", classes: "bg-danger" },
  { id: 1, label: "در انتظار تایید", classes: "bg-border" },
  { id: 2, label: "تایید شده", classes: "bg-success" },
];

function FreelancerProposalsItem({
  price,
  duration,
  status,
  index,
  description,
}) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="w-max-60">{description}</td>
      <td>{duration}</td>
      <td>{price}</td>
      <td>
        <span
          className={`py-1 px-4 rounded-xl font-semibold ${proposalsStatus[status].classes}`}
        >
          {proposalsStatus[status].label}
        </span>
      </td>
    </Table.Row>
  );
}

export default FreelancerProposalsItem;
