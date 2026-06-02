import Table from "../../../ui/Table";
import {
  EyeIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
import Tag from "../../../ui/Tag";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import DeleteModal from "../../../ui/DeleteModal";
import { Link } from "react-router-dom";
import ToggleButton from "../../../ui/ToggleButton";
import { useDeleteProject } from "../hooks/useDeleteProject";
import OwnerProjectModal from "./OwnerProjectModal";
import toLoaclDateShort from "../../../utils/toLocalDateShort";
import truncateText from "../../../utils/truncateText";
import {
  toPersianNumbers,
  toPersianNumberWithComma,
} from "../../../utils/toPersianNumber";
import useUpdateStatusProject from "../hooks/useUpdateStatusProject";
import Sppiner from "../../../ui/Sppiner";

function OwnerProjectRow({ project, index }) {
  const { title, budget, category, deadline, status, _id, tags } = project;
  const projectStatus = status === "OPEN" ? true : false;
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditeModal] = useState(false);
  const { isDeleting, deleteProject } = useDeleteProject();
  const { isUpdatingStatus, updateStatusProject } = useUpdateStatusProject();

  const onHandleDeleteProject = async () => {
    await deleteProject(_id, {
      onSuccess: () => {
        setIsOpenDeleteModal(false);
      },
    });
  };

  const onHandleUpdateStatusProject = async () => {
    const newStatus = status === "OPEN" ? "CLOSED" : "OPEN";
    updateStatusProject({ id: _id, data: { status: newStatus } });
  };

  return (
    <Table.Row>
      <td>{toPersianNumbers(index)}</td>
      <td className="w-max-60">
        <p title={title}>{truncateText(title, 30)}</p>
      </td>
      <td>{category.title}</td>
      <td>{toPersianNumberWithComma(budget)}</td>
      <td>{toLoaclDateShort(deadline)}</td>
      <td>
        <div className="center-all flex-wrap gap-1 max-w-40 mx-auto">
          {tags.length
            ? tags.map((t) => (
                <Tag key={t} classes="bg-tag">
                  {t}
                </Tag>
              ))
            : "__"}
        </div>
      </td>
      <td>
        {isUpdatingStatus ? (
          <Sppiner width="30" height="20" />
        ) : (
          <div className="flex items-center gap-2 justify-center">
            <span>{status === "OPEN" ? "باز" : "بسته"}</span>
            <ToggleButton
              checked={projectStatus}
              onChange={onHandleUpdateStatusProject}
            />
          </div>
        )}
      </td>
      <td>
        <div className="flex items-center justify-between gap-1">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenDeleteModal((is) => !is)}
          >
            <TrashIcon className="size-5 hover:text-danger" />
          </button>
          <Modal
            open={isOpenDeleteModal}
            title={`حذف ${title}`}
            onClose={() => setIsOpenDeleteModal(false)}
          >
            <DeleteModal
              onClose={() => setIsOpenDeleteModal(false)}
              onConfirm={onHandleDeleteProject}
              disabled={isDeleting}
              title={title}
            />
          </Modal>
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenEditeModal(true)}
          >
            <PencilSquareIcon className="size-5 hover:text-success" />
          </button>
          <Modal
            open={isOpenEditModal}
            title={`ویرایش ${title}`}
            onClose={() => setIsOpenEditeModal(false)}
          >
            <OwnerProjectModal
              onClose={() => setIsOpenEditeModal(false)}
              projectToEdit={project}
            />
          </Modal>
        </div>
      </td>
      <td>
        <Link to={_id}>
          <EyeIcon className="size-5 cursor-pointer mx-auto hover:text-tag" />
        </Link>
      </td>
    </Table.Row>
  );
}

export default OwnerProjectRow;
