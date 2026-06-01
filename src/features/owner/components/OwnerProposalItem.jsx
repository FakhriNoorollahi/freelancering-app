import { CogIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Table from "../../../ui/Table";
import Modal from "../../../ui/Modal";
import Tag from "../../../ui/Tag";
import OwnerStatusChangeProposalModal from "./OwnerStatusChangeProposalModal";
import proposalStatusData from "../../../constants/proposalStatusData";
import truncateText from "../../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "../../../utils/toPersianNumber";

function OwnerProposalItem({ proposal, index }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user, status, price, duration, description } = proposal;
  return (
    <Table.Row>
      <td>{toPersianNumbers(index + 1)}</td>
      <td>{user.name}</td>
      <td>
        <p title={description}>{truncateText(description, 40)}</p>
      </td>
      <td>{duration}</td>
      <td>{toPersianNumberWithComma(price)}</td>
      <td>
        <Tag classes={`mx-auto ${proposalStatusData[status].classes}`}>
          {proposalStatusData[status].title}
        </Tag>
      </td>
      <td>
        <button
          className="cursor-pointer group"
          onClick={() => setIsOpenModal(true)}
        >
          <CogIcon className="size-6 group-hover:text-tag" />
        </button>
        <Modal
          open={isOpenModal}
          onClose={() => setIsOpenModal(false)}
          title="تغییر وضعیت پروپوزال"
        >
          <OwnerStatusChangeProposalModal
            onClose={() => setIsOpenModal(false)}
            proposalId={proposal._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default OwnerProposalItem;
