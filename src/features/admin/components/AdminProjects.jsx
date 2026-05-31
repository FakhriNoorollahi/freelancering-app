import { BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { useProjectLists } from "../../../hooks/useOwner";
import ButtonSecondary from "../../../ui/ButtonSecondary";
import Sppiner from "../../../ui/Sppiner";
import Table from "../../../ui/Table";
import { useState } from "react";
import Modal from "../../../ui/Modal";
import { useSearchParams } from "react-router-dom";
import AdminProjectRow from "./AdminProjectRow";
import AdminFiltersModal from "./AdminFiltersModal";

function AdminProjects() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);
  const { projects, isPending: isAllProjecting } = useProjectLists();

  const onHandleFilter = (data) => {
    const { sort, status, category } = data;
    if (category) searchParams.set("category", category);
    if (status) searchParams.set("status", status);
    if (sort) searchParams.set("sort", sort);

    setSearchParams(searchParams);
    setIsOpenFilterModal(false);
  };

  const onDeleteFilter = () => {
    setSearchParams({});
    setIsOpenFilterModal(false);
  };

  return (
    <div className="flex flex-col gap-y-10">
      <>
        <div className="flex justify-between items-center flex-wrap gap-y-2">
          <p className="text-lg font-semibold lg:text-2xl lg:font-bold">
            پروژه های شما
          </p>
          <ButtonSecondary
            classes="flex items-center text-sm gap-x-3 border-border-opacity hover:border-brand-primary"
            onClick={() => setIsOpenFilterModal(true)}
          >
            <BarsArrowDownIcon className="size-5" />
            فیلتر
          </ButtonSecondary>
          <Modal
            onClose={() => setIsOpenFilterModal(false)}
            title="فیلتر پروژه ها"
            open={isOpenFilterModal}
          >
            <AdminFiltersModal
              searchParams={searchParams}
              onHandleFilter={onHandleFilter}
              onDeleteFilter={onDeleteFilter}
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
            </Table.Header>
            <Table.Body>
              {projects.map((project, index) => (
                <AdminProjectRow
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

export default AdminProjects;
