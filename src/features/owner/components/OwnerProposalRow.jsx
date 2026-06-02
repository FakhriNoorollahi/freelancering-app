import { useState } from "react";
import { CogIcon } from "@heroicons/react/24/outline";
import OwnerProposalStateChangeModal from "./OwnerProposalStateChangeModal";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "@/utils/toPersianNumber";
import truncateText from "@/utils/truncateText";
import USER_PROPOSAL_STATUS_DATA from "@/constants/userProposalStatusData";
import Table from "@/ui/Table";
import Modal from "@/ui/Modal";
import Tag from "@/ui/Tag";

function OwnerProposalRow({ proposal, index }) {
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
        <Tag classes={`mx-auto ${USER_PROPOSAL_STATUS_DATA[status].classes}`}>
          {USER_PROPOSAL_STATUS_DATA[status].title}
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
          <OwnerProposalStateChangeModal
            onClose={() => setIsOpenModal(false)}
            proposalId={proposal._id}
          />
        </Modal>
      </td>
    </Table.Row>
  );
}

export default OwnerProposalRow;
