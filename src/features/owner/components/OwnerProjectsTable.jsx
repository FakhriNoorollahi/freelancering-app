import { PlusIcon } from "@heroicons/react/16/solid";
import Button from "../../../ui/Button";
import Table from "../../../ui/Table";
import Sppiner from "../../../ui/Sppiner";
import { useState } from "react";
import OwnerProjectModal from "./OwnerProjectModal";
import OwnerProjectsItem from "./OwnerProjectsItem";
import { useOwnerProjects } from "../../../hooks/useOwnerProjects";
import Modal from "../../../ui/Modal";

function OwnerProjectsTable() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { allProjects, isPending: isAllProjecting } = useOwnerProjects();

  if (isAllProjecting) return <Sppiner />;
  if (!allProjects.length) return <p> پروژه ای وجود ندارد</p>;

  return (
    <div className="flex flex-col gap-y-10">
      <>
        <div className="flex justify-between items-center">
          <h3>پروژه های شما</h3>
          <Button
            classes="flex justify-between items-center gap-x-2"
            onClick={() => setIsOpenModal((is) => !is)}
          >
            <PlusIcon className="size-5" />
            <span className="text-sm">اضافه کردن پروژه</span>
          </Button>
        </div>
        <Table>
          <Table.Header>
            <th>#</th>
            <th>عنوان پروژه</th>
            <th>دسته بندی</th>
            <th>بودجه</th>
            <th>ددلاین</th>
            <th>تگ ها</th>
            <th>وضعیت</th>
            <th>عملیات</th>
            <th>درخواست ها</th>
          </Table.Header>
          <Table.Body>
            {allProjects.map((project, index) => (
              <OwnerProjectsItem
                key={project._id}
                project={project}
                index={index + 1}
              />
            ))}
          </Table.Body>
        </Table>
      </>
      <Modal
        open={isOpenModal}
        title="اضافه کردن پروژه جدید"
        onClose={() => setIsOpenModal(false)}
      >
        <OwnerProjectModal onClose={() => setIsOpenModal(false)} />
      </Modal>
    </div>
  );
}

export default OwnerProjectsTable;
