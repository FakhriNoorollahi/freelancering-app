import { PlusIcon } from "@heroicons/react/16/solid";
import Button from "../../ui/Button";
import Table from "../../ui/Table";
import OwnerProjectsItem from "./ownerProjectsItem";
import Sppiner from "../../ui/Sppiner";
import { useAddProject, useOwnerProjects } from "../../hooks/useOwner";
import { useState } from "react";

import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import OwnerProjectModal from "./OwnerProjectModal";

function OwnerProjects() {
  const queryClient = useQueryClient();

  const [isOpenModal, setIsOpenModal] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [budget, setBudget] = useState("");
  const [category, setCategory] = useState("6a08612d903e3da1a532003e");
  const [date, setDate] = useState(new Date());

  const { allProjects, isPending: isAllProjecting } = useOwnerProjects();
  const { mutateAsync: createProject, isPending: isCreatingProject } =
    useAddProject();

  const onHandleAddProject = async (e) => {
    e.preventDefault();
    const req = {
      title,
      description,
      budget,
      category,
      deadline: date,
      tags: [],
    };
    await createProject(req, {
      onSuccess: ({ message }) => {
        setIsOpenModal(false);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
        toast.success(message);
      },
      onError: () => {
        setIsOpenModal(false);
      },
    });
  };

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
              <th>فریلنسر</th>
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
          setBudget={setBudget}
          setTitle={setTitle}
          setDescription={setDescription}
          setCategory={setCategory}
          setDate={setDate}
          onHandleAddProject={onHandleAddProject}
          setIsOpenModal={setIsOpenModal}
          title={title}
          description={description}
          budget={budget}
          isCreatingProject={isCreatingProject}
          date={date}
        />
      )}
    </div>
  );
}

export default OwnerProjects;
