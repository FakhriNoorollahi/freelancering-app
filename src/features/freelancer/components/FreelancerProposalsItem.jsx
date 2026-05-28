import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import proposalStatusData from "../../../constants/proposalStatusData";
import { toPersianNumberWithComma } from "../../../utils/toPersianNumber";

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
      <td>{toPersianNumberWithComma(price)}</td>
      <td>
        <Tag classes={`mx-auto ${proposalStatusData[status].classes}`}>
          {proposalStatusData[status].title}
        </Tag>
      </td>
    </Table.Row>
  );
}

export default FreelancerProposalsItem;
