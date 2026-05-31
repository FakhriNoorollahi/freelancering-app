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

function AdminFiltersModal({ onDeleteFilter, searchParams, onHandleFilter }) {
  const { register, handleSubmit } = useForm({
    defaultValues: getDefaultValues(),
  });
  const { transformedEnglisCategories, isCategoring } = useGetCategory();

  function getDefaultValues() {
    return {
      category: searchParams.get("category") || "",
      sort: searchParams.get("sort") || "",
      status: searchParams.get("status") || "",
    };
  }

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

export default AdminFiltersModal;
