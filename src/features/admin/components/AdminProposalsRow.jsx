import USER_PROPOSAL_STATUS_DATA from "@/constants/userProposalStatusData";
import Table from "@/ui/Table";
import Tag from "@/ui/Tag";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";

function AdminProposalsRow({ price, duration, status, index, description }) {
  return (
    <Table.Row>
      <td>{toPersianNumbers(index)}</td>
      <td className="w-max-60">
        <p title={description}>{truncateText(description, 60)}</p>
      </td>
      <td>{toPersianNumbers(duration)} روز</td>
      <td>{toPersianNumberWithComma(price)}</td>
      <td>
        <Tag classes={`mx-auto ${USER_PROPOSAL_STATUS_DATA[status].classes}`}>
          {USER_PROPOSAL_STATUS_DATA[status].title}
        </Tag>
      </td>
    </Table.Row>
  );
}

export default AdminProposalsRow;
