import Table from "../../../ui/Table";
import { EyeIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Tag from "../../../ui/Tag";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import DeleteModal from "../../../ui/DeleteModal";
import { Link } from "react-router-dom";
import ToggleButton from "../../../ui/ToggleButton";
import { useDeleteProject } from "../hooks/useDeleteProject";
import OwnerProjectModal from "./OwnerProjectModal";

function OwnerProjectsItem({ project, index }) {
  const { title, budget, category, deadline, status, _id } = project;
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);
  const [isOpenEditModal, setIsOpenEditeModal] = useState(false);
  const { isDeleting, deleteProject } = useDeleteProject();

  const onHandleDeleteProject = async () => {
    await deleteProject(_id, {
      onSuccess: () => {
        setIsOpenDeleteModal(false);
      },
    });
  };

  return (
    <Table.Row>
      <td>{index}</td>
      <td className="w-max-60">{title}</td>
      <td>{category.title}</td>
      <td>{budget}</td>
      <td>{new Date(deadline).toLocaleDateString("fa")}</td>
      <td>
        <div className="center-all flex-wrap gap-1 max-w-40 mx-auto">
          <Tag classes="bg-tag">Html</Tag>
          <Tag classes="bg-tag">Figma</Tag>
        </div>
      </td>
      <td>
        {status}
        <ToggleButton />
      </td>
      <td>
        <div className="flex items-center justify-between gap-x-3">
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
            <PencilIcon className="size-5 hover:text-success" />
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

export default OwnerProjectsItem;
