import { PlusIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import OwnerProjectModal from "./OwnerProjectModal";
import OwnerProjectRow from "./OwnerProjectRow";
import { useOwnerProjects } from "@/hooks/useOwner";
import Sppiner from "@/ui/Sppiner";
import Table from "@/ui/Table";
import Modal from "@/ui/Modal";
import Empty from "@/ui/Empty";
import Button from "@/ui/Button";

function OwnerProjectsTable() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { allProjects, isPending: isAllProjecting } = useOwnerProjects();

  if (isAllProjecting)
    return (
      <div className="center-all h-full">
        <Sppiner />
      </div>
    );

  return (
    <div className="flex flex-col gap-y-10 h-full">
      <div className="flex justify-between items-center flex-wrap gap-y-2">
        <p className="text-xl font-semibold lg:text-4xl lg:font-bold">
          پروژه های شما
        </p>
        <Button
          classes="flex justify-between items-center gap-x-2"
          onClick={() => setIsOpenModal((is) => !is)}
        >
          <PlusIcon className="size-5" />
          <span className="text-sm">اضافه کردن پروژه</span>
        </Button>
      </div>
      {allProjects.length ? (
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
              <OwnerProjectRow
                key={project._id}
                project={project}
                index={index + 1}
              />
            ))}
          </Table.Body>
        </Table>
      ) : (
        <div className="center-all flex-1">
          <Empty title="پروژه ای" />
        </div>
      )}
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
