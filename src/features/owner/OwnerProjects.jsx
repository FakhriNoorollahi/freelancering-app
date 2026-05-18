import { PlusIcon } from "@heroicons/react/16/solid";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import Sppiner from "../../ui/Sppiner";
import { useOwnerProjects } from "../../hooks/useOwner";
import { useState } from "react";
import OwnerProjectModal from "./OwnerProjectModal";
import OwnerProjectsItem from "./OwnerProjectsItem";

function OwnerProjects() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [editValues, setEditValues] = useState(null);

  const { allProjects, isPending: isAllProjecting } = useOwnerProjects();

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
        {isAllProjecting ? (
          <Sppiner />
        ) : allProjects.length > 0 ? (
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
                  {...project}
                  index={index + 1}
                  setIsOpenModal={() => setIsOpenModal(true)}
                  setEditValues={setEditValues}
                />
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p> پروژه ای وجود ندارد</p>
        )}
      </>
      {isOpenModal && (
        <OwnerProjectModal
          setIsOpenModal={setIsOpenModal}
          editValues={editValues}
          setEditValues={setEditValues}
        />
      )}
    </div>
  );
}

export default OwnerProjects;
