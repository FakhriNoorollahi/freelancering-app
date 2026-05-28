import { useForm } from "react-hook-form";
import Select from "../../../ui/Select";
import Button from "../../../ui/Button";
import Sppiner from "../../../ui/Sppiner";
import ButtonSecondary from "../../../ui/ButtonSecondary";
import { createSearchParams } from "react-router-dom";
import useGetCategory from "../../../hooks/useCategory";
import {
  ORDER_OPTIONS,
  STATUS_OPTIONS,
} from "../../../constants/filterStatusData";

function FreelancerFiltersModal({ onClose }) {
  const { register, handleSubmit } = useForm();
  const { transformedCategories, isCategoring } = useGetCategory();

  const onHandleSubmit = (data) => {
    const c = createSearchParams(data);
    console.log(data, c);
  };

  const onDeleteFilter = () => {
    onClose();
  };

  return (
    <>
      {!isCategoring ? (
        <form onSubmit={handleSubmit(onHandleSubmit)}>
          <Select
            register={register}
            name="status"
            options={STATUS_OPTIONS}
            label="وضعیت"
          />
          <Select
            register={register}
            name="order"
            options={ORDER_OPTIONS}
            label="مرتب سازی"
          />
          <Select
            register={register}
            name="category"
            options={transformedCategories}
            label="دسته بندی"
          />
          <div className="flex items-center justify-between gap-x-3">
            <Button classes="w-full">تایید</Button>
            <ButtonSecondary classes="w-full" onClick={onDeleteFilter}>
              حذف فیلتر
            </ButtonSecondary>
          </div>
        </form>
      ) : (
        <Sppiner />
      )}
    </>
  );
}

export default FreelancerFiltersModal;
