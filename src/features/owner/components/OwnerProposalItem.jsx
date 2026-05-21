import { CogIcon } from "@heroicons/react/24/outline";
import Table from "../../ui/Table";
import Tag from "../../ui/Tag";
import Modal from "../../ui/Modal";
import OwnerStatusChangeProposalModal from "./OwnerStatusChangeProposalModal";
import { useState } from "react";

const statusOptions = [
  { id: 0, label: "رد شده", classes: "bg-danger" },
  { id: 1, label: "در انتظار تایید", classes: "bg-border" },
  { id: 2, label: "تایید شده", classes: "bg-success" },
];

function OwnerProposalItem({ proposal, index }) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { user, status, price, duration, description } = proposal;
  return (
    <Table.Row>
      <td>{index + 1}</td>
      <td>{user.name}</td>
      <td>{description}</td>
      <td>{duration}</td>
      <td>{price}</td>
      <td>
        <Tag classes={`mx-auto ${statusOptions[status].classes}`}>
          {statusOptions[status].label}
        </Tag>
      </td>
      <td>
        <button
          className="cursor-pointer group"
          onClick={() => setIsOpenModal(true)}
        >
          <CogIcon className="size-6 group-hover:text-tag" />
        </button>
        {
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
        }
      </td>
    </Table.Row>
  );
}

export default OwnerProposalItem;
