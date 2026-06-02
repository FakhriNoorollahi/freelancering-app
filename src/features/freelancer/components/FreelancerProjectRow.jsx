import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import PROJECT_STATUS_DATA from "@/constants/projectStatusData";
import Modal from "@/ui/Modal";
import Table from "@/ui/Table";
import Tag from "@/ui/Tag";
import toLoaclDateShort from "@/utils/toLocalDateShort";
import { toPersianNumberWithComma } from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";
import FreelancerProposalModal from "./FreelancerProposalModal";

function FreelancerProjectRow({
  title,
  budget,
  deadline,
  status,
  index,
  description,
  category,
  _id,
}) {
  const [isOpenModal, setIsOpenModal] = useState(false);

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
      <td>
        <button
          disabled={status === "OPEN" ? false : true}
          className={`cursor-pointer group ${status !== "OPEN" ? "pointer-events-none" : ""}`}
          onClick={() => setIsOpenModal(true)}
        >
          <DocumentPlusIcon className="size-5 hover:text-tag group-disabled:text-border-opacity" />
        </button>
        <Modal
          onClose={() => setIsOpenModal(false)}
          title={`درخواست انجام پروژه ${title}`}
          open={isOpenModal}
        >
          <FreelancerProposalModal
            onClose={() => setIsOpenModal(false)}
            projectId={_id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default FreelancerProjectRow;
