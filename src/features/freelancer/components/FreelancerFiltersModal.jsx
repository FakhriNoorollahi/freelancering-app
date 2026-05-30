import { useForm } from "react-hook-form";
import Select from "../../../ui/Select";
import Button from "../../../ui/Button";
import Sppiner from "../../../ui/Sppiner";
import ButtonSecondary from "../../../ui/ButtonSecondary";
import useGetCategory from "../../../hooks/useCategory";
import {
  ORDER_OPTIONS,
  STATUS_OPTIONS,
} from "../../../constants/filterStatusData";

function FreelancerFiltersModal({ onClose, searchParams, onHandleFilter }) {
  const { register, handleSubmit } = useForm({ defaultValues: paramsValue() });
  const { transformedEnglisCategories, isCategoring } = useGetCategory();

  function paramsValue() {
    const category = searchParams.get("category") || "";
    const sort = searchParams.get("sort") || "";
    const status = searchParams.get("status") || "";
    const value = { status, category, sort };
    return value;
  }

  const onDeleteFilter = () => {
    onClose();
  };

  return (
    <>
      {!isCategoring ? (
        <form onSubmit={handleSubmit(onHandleFilter)}>
          <Select
            register={register}
            name="status"
            options={STATUS_OPTIONS}
            label="وضعیت"
          />
          <Select
            register={register}
            name="sort"
            options={ORDER_OPTIONS}
            label="مرتب سازی"
          />
          <Select
            register={register}
            name="category"
            options={[
              { id: 1, title: "همه", value: "ALL" },
              ...transformedEnglisCategories,
            ]}
            label="دسته بندی"
          />
          <div className="flex items-center justify-between gap-x-3">
            <Button classes="w-full">تایید</Button>
            <ButtonSecondary
              classes="w-full hover:text-danger hover:border-danger"
              onClick={onDeleteFilter}
            >
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
