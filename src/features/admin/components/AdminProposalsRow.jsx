import Table from "../../../ui/Table";
import Tag from "../../../ui/Tag";
import proposalStatusData from "../../../constants/proposalStatusData";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "../../../utils/toPersianNumber";
import truncateText from "../../../utils/truncateText";

function AdminProposalsRow({ price, duration, status, index, description }) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="w-max-60">
        <p title={description}>{truncateText(description, 60)}</p>
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumberWithComma(price)}</td>
      <td>
        <Tag classes={`mx-auto ${proposalStatusData[status].classes}`}>
          {proposalStatusData[status].title}
        </Tag>
      </td>
    </Table.Row>
  );
}

export default AdminProposalsRow;
