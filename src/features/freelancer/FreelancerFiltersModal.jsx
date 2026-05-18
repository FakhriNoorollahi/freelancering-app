import { useForm } from "react-hook-form";
import Select from "../../ui/Select";
import Modal from "../../ui/Modal";
import Button from "../../ui/Button";
import Sppiner from "../../ui/Sppiner";
import { useGetCategory } from "../../hooks/useCategory";
import ButtonSecondary from "../../ui/ButtonSecondary";
import { createSearchParams } from "react-router-dom";

const statusOptions = [
  { id: 1, title: "همه", value: "all" },
  { id: 2, title: "باز", value: "open" },
  { id: 3, title: "بسته", value: "بسته" },
];

const orderOptions = [
  { id: 1, title: "همه", value: "all" },
  { id: 2, title: "جدیدترین", value: "newest" },
  { id: 3, title: "قدیمی ترین", value: "latest" },
];

function FreelancerFiltersModal({ onClose }) {
  let categoriesOption;
  const { register, handleSubmit } = useForm();

  const { categories, isPending: isCategoring } = useGetCategory();

  if (categories) {
    categoriesOption = categories.map((c) => {
      return { id: c._id, title: c.title, value: c.englishTitle };
    });
  }

  const onHandleSubmit = (data) => {
    const c = createSearchParams(data);
    console.log(data, c);
  };

  const onDeleteFilter = () => {
    onClose();
  };

  return (
    <Modal title="فیلتر پروژه ها" onClose={onClose}>
      {!isCategoring ? (
        <form onSubmit={handleSubmit(onHandleSubmit)} className="space-y-6">
          <Select
            register={register}
            name="status"
            options={statusOptions}
            label="وضعیت"
          />
          <Select
            register={register}
            name="order"
            options={orderOptions}
            label="مرتب سازی"
          />
          <Select
            register={register}
            name="category"
            options={categoriesOption}
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
    </Modal>
  );
}

export default FreelancerFiltersModal;
