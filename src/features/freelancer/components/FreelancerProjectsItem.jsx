import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import Table from "../../../ui/Table";
import FreelancerProposalModal from "./FreelancerProposalModal";
import { useState } from "react";
import ProjectStatusData from "../../../constants/projectStatusData";
import Tag from "../../../ui/Tag";
import { toPersianNumberWithComma } from "../../../utils/toPersianNumber";
import toLoaclDateShort from "../../../utils/toLocalDateShort";
import Modal from "../../../ui/Modal";

function FreelancerProjectsItem({
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
      <td className="w-max-60">{title}</td>
      <td className="w-max-60">{description}</td>
      <td>{category.title}</td>
      <td>{toPersianNumberWithComma(budget)}</td>
      <td>{toLoaclDateShort(deadline)}</td>
      <td>
        <Tag classes={`mx-auto ${ProjectStatusData[status].classes}`}>
          {ProjectStatusData[status].title}
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
          title="درخواست انجام پروژه"
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

export default FreelancerProjectsItem;
