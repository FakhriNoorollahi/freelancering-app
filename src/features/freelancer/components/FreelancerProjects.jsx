import { ArchiveBoxArrowDownIcon } from "@heroicons/react/24/outline";
import { useProjectLists } from "../../../hooks/useOwner";
import ButtonSecondary from "../../../ui/ButtonSecondary";
import Sppiner from "../../../ui/Sppiner";
import Table from "../../../ui/Table";
import FreelancerProjectsItem from "./FreelancerProjectsItem";
import { useState } from "react";
import FreelancerFiltersModal from "./FreelancerFiltersModal";
import Modal from "../../../ui/Modal";

function FreelancerProjects() {
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
  const { projects, isPending: isAllProjecting } = useProjectLists();

  return (
    <div className="flex flex-col gap-y-10">
      <>
        <div className="flex justify-between items-center">
          <h3>لیست پروژه ها</h3>
          <ButtonSecondary
            classes="flex items-center text-sm gap-x-3 border-border-opacity"
            onClick={() => setIsOpenFilterModal(true)}
          >
            <ArchiveBoxArrowDownIcon className="size-5" />
            فیلتر
          </ButtonSecondary>
          <Modal
            onClose={() => setIsOpenFilterModal(false)}
            title="فیلتر پروژه ها"
            open={isOpenFilterModal}
          >
            <FreelancerFiltersModal
              onClose={() => setIsOpenFilterModal(false)}
            />
          </Modal>
        </div>
        {isAllProjecting ? (
          <Sppiner />
        ) : projects.length > 0 ? (
          <Table>
            <Table.Header>
              <th>#</th>
              <th>عنوان پروژه</th>
              <th>توضیحات</th>
              <th>دسته بندی</th>
              <th>بودجه</th>
              <th>ددلاین</th>
              <th>وضعیت</th>
              <th>عملیات</th>
            </Table.Header>
            <Table.Body>
              {projects.map((project, index) => (
                <FreelancerProjectsItem
                  key={project._id}
                  {...project}
                  index={index + 1}
                />
              ))}
            </Table.Body>
          </Table>
        ) : (
          <p> پروژه ای وجود ندارد</p>
        )}
      </>
    </div>
  );
}

export default FreelancerProjects;
