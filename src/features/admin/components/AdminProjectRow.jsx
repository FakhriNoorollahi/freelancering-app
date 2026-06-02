import PROJECT_STATUS_DATA from "@/constants/projectStatusData";
import Table from "@/ui/Table";
import Tag from "@/ui/Tag";
import toLoaclDateShort from "@/utils/toLocalDateShort";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";

function AdminProjectRow({
  title,
  budget,
  deadline,
  status,
  index,
  description,
  category,
}) {
  return (
    <Table.Row>
      <td>{index}</td>
      <td className="w-max-60">
        <p title={title}>{truncateText(title, 30)}</p>
      </td>
      <td className="w-max-60">
        <p title={description}>{truncateText(description, 60)}</p>
      </td>
      <td>{category.title}</td>
      <td>{toPersianNumberWithComma(budget)}</td>
      <td>{toLoaclDateShort(deadline)}</td>
      <td>
        <Tag classes={`mx-auto ${PROJECT_STATUS_DATA[status].classes}`}>
          {PROJECT_STATUS_DATA[status].title}
        </Tag>
      </td>
    </Table.Row>
  );
}

export default AdminProjectRow;
