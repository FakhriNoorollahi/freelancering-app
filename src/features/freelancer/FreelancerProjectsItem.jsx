import { DocumentPlusIcon } from "@heroicons/react/24/outline";
import Table from "../../ui/Table";
import FreelancerProposalModal from "./FreelancerProposalModal";
import { useState } from "react";

const projectStatus = {
  OPEN: {
    label: "باز",
    className: "bg-success",
  },
  CLOSE: {
    label: "بسته",
    className: "bg-danger",
  },
};

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
      <td>{budget}</td>
      <td>{new Date(deadline).toLocaleDateString("fa")}</td>
      <td>
        <span
          className={`py-1 px-4 rounded-xl font-semibold ${projectStatus[status].className}`}
        >
          {projectStatus[status].label}
        </span>
      </td>
      <td>
        <button className="cursor-pointer" onClick={() => setIsOpenModal(true)}>
          <DocumentPlusIcon className="size-5 hover:text-tag" />
        </button>
        {isOpenModal && (
          <FreelancerProposalModal
            onClose={() => setIsOpenModal(false)}
            projectId={_id}
          />
        )}
      </td>
    </Table.Row>
  );
}

export default FreelancerProjectsItem;
