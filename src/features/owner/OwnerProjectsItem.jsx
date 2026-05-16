import Table from "../../ui/Table";
import { EyeIcon, TrashIcon, PencilIcon } from "@heroicons/react/24/outline";
import Tag from "../../ui/Tag";
import { useDeleteProject } from "../../hooks/useOwner";
import { useState } from "react";
import Modal from "../../ui/Modal";
import DeleteModal from "../../ui/DeleteModal";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";

function OwnerProjectsItem({
  title,
  budget,
  category,
  deadline,
  status,
  tags,
  freelancer,
  index,
  _id,
  setIsOpenModal,
  setProjectId,
}) {
  const queryClient = useQueryClient();
  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState(false);

  const {
    data,
    isPending: isDeletingProject,
    mutateAsync: deleteProject,
  } = useDeleteProject();

  const onHandleDeleteProject = async () => {
    await deleteProject(_id, {
      onSuccess: ({ message }) => {
        setIsOpenDeleteModal(false);
        toast.success(message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError: () => {},
    });
  };

  const onHandleEditProject = () => {
    setProjectId(_id);
    console.log(_id);
    setIsOpenModal(true);
  };

  return (
    <Table.Row>
      <td>{index}</td>
      <td className="w-max-60">{title}</td>
      <td>{category.title}</td>
      <td>{budget}</td>
      <td>{new Date(deadline).toLocaleDateString("fa")}</td>
      <td className="w-max-40">
        <div className="flex items-center gap-x-2">
          <Tag>Html</Tag>
          <Tag>Css</Tag>
          <Tag>Figma</Tag>
        </div>
      </td>
      <td>{freelancer ? freelancer : "***"}</td>
      <td>{status}</td>
      <td>
        <div className="flex items-center justify-between gap-x-3">
          <button
            className="cursor-pointer"
            onClick={() => setIsOpenDeleteModal((is) => !is)}
          >
            <TrashIcon className="size-5 hover:text-danger" />
          </button>
          <button className="cursor-pointer" onClick={onHandleEditProject}>
            <PencilIcon className="size-5 hover:text-success" />
          </button>
        </div>
      </td>
      <td>
        <button className="cursor-pointer">
          <EyeIcon className="size-5 hover:text-tag" />
        </button>
      </td>

      {isOpenDeleteModal && (
        <Modal
          title={`حذف پروژه ${title}`}
          onClose={() => setIsOpenDeleteModal(false)}
        >
          <DeleteModal
            onClose={() => setIsOpenDeleteModal(false)}
            description={`آیا از حذف پروژه ${title} مطمئن هستید؟`}
            onClick={onHandleDeleteProject}
            isLoading={isDeletingProject}
          />
        </Modal>
      )}
    </Table.Row>
  );
}

export default OwnerProjectsItem;
