import TextField from "../../../ui/TextField";
import Select from "../../../ui/Select";
import DatePickerField from "../../../ui/DatePickerField";
import TagsField from "../../../ui/TagsField";
import Button from "../../../ui/Button";
import Sppiner from "../../../ui/Sppiner";
import { useForm } from "react-hook-form";
import useAddProject from "../hooks/useAddProject";
import useEditProject from "../hooks/useEditProject";
import useGetCategory from "../../../hooks/useCategory";

function OwnerProjectModal({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const { transformedCategories, isCategoring } = useGetCategory();

  const isEditSession = Boolean(editId);
  const { title, description, budget, category } = projectToEdit; //ADD TAGS AND DEADLIN AFTER
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
    };
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm({ defaultValues: editValues });

  const { addProject, isAdding } = useAddProject();
  const { editProject, isEditting } = useEditProject();

  const onHandleSubmit = async (data) => {
    const newProject = {
      ...data,
      deadline: new Date(),
      tags: [],
    };

    if (!isDirty) return onClose();

    if (editId) {
      await editProject(
        { id: editId, newProject },
        {
          onSuccess: () => {
            onClose();
            reset();
          },
        },
      );
    } else {
      await addProject(newProject, {
        onSuccess: () => {
          onClose();
          reset();
        },
      });
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onHandleSubmit)}>
      <TextField
        register={register}
        name="title"
        label="عنوان"
        placeholder="نمونه: فریلنسری"
        errors={errors}
        validationSchema={{
          required: "عنوان ضروری است",
          minLength: {
            value: 10,
            message: "طول عنوان نامعتبر است.",
          },
        }}
        required
      />
      <TextField
        register={register}
        label="توضیحات"
        name="description"
        placeholder="نمونه: پروژه ساخت وب سایت"
        errors={errors}
        validationSchema={{
          required: "توضیحات ضروری است",
          minLength: {
            value: 20,
            message: "طول توضیحات نامعتبر است.",
          },
          maxLength: {
            value: 50,
            message: "طول توضیحات نامعتبر است.",
          },
        }}
        required
      />
      <TextField
        register={register}
        label="بودجه"
        name="budget"
        placeholder="نمونه: 250000"
        errors={errors}
        validationSchema={{
          required: "بودجه ضروری است",
        }}
        required
      />
      <Select
        register={register}
        label="دسته بندی"
        name="category"
        validationSchema={{ required: "دسته بندی ضروری است." }}
        options={
          isCategoring
            ? [{ id: "1", value: "", title: "در حال بارگذاری..." }]
            : transformedCategories
        }
        required
      />
      <TagsField label="کلمات کلیدی" />
      <DatePickerField label="ددلاین" date="date" setDate={() => {}} />
      {(editId ? isEditting : isAdding) ? (
        <Sppiner />
      ) : (
        <Button classes="w-full">تایید</Button>
      )}
    </form>
  );
}

export default OwnerProjectModal;
