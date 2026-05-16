import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import Select from "../../ui/Select";
import DatePickerField from "../../ui/DatePickerField";
import TagsField from "../../ui/TagsField";
import Button from "../../ui/Button";
import Sppiner from "../../ui/Sppiner";

function OwnerProjectModal({
  setBudget,
  setCategory,
  setDate,
  setDescription,
  setIsOpenModal,
  setTitle,
  isCreatingProject,
  title,
  description,
  budget,
  onHandleAddProject,
  date,
}) {
  return (
    <Modal onClose={() => setIsOpenModal(false)} title="اضافه کردن پروژه جدید">
      <form
        className="flex flex-col gap-y-5 max-h-96 overflow-y-auto scroll-mr-56 pl-4"
        onSubmit={onHandleAddProject}
      >
        <TextField
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          label="عنوان"
          id="title"
          type="text"
          placeholder="نمونه: فریلنسری"
        />
        <TextField
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          label="توضیحات"
          id="description"
          type="text"
          placeholder="نمونه: پروژه ساخت وب سایت"
        />
        <TextField
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
          label="بودجه"
          id="budget"
          type="number"
          placeholder="نمونه: 250000"
        />
        <Select
          onChange={(e) => setCategory(e.target.value)}
          label="دسته بندی"
          options={[
            {
              id: 1,
              title: "برنامه نویسی",
              value: "6a08612d903e3da1a532003e",
            },
            { id: 2, title: "UI/UX", value: "6a08612d903e3da1a532003e" },
          ]}
        />
        <TagsField label="کلمات کلیدی" />
        <DatePickerField label="ددلاین" date={date} setDate={setDate} />
        {isCreatingProject ? (
          <Sppiner />
        ) : (
          <Button classes="w-full">تایید</Button>
        )}
      </form>
    </Modal>
  );
}

export default OwnerProjectModal;
