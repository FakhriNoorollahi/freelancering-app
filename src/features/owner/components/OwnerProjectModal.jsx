import { useForm } from "react-hook-form";
import { useState } from "react";
import useGetCategory from "@/hooks/useCategory";
import useAddProject from "../hooks/useAddProject";
import useEditProject from "../hooks/useEditProject";
import TextField from "@/ui/TextField";
import DatePickerField from "@/ui/DatePickerField";
import Select from "@/ui/Select";
import TagInput from "@/ui/TagInput";
import Sppiner from "@/ui/Sppiner";
import Button from "@/ui/Button";

function OwnerProjectModal({ onClose, projectToEdit = {} }) {
  const { _id: editId } = projectToEdit;
  const { transformedCategories, isCategoring } = useGetCategory();

  const isEditSession = Boolean(editId);
  const { title, description, budget, category, deadline, tags } =
    projectToEdit;
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      description,
      budget,
      category: category._id,
      deadline,
      tags,
    };
  }

  const [selectedTags, setSelectedTags] = useState(
    tags?.map((t) => ({ id: t, text: t })) || [],
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    control,
  } = useForm({ defaultValues: editValues });

  const { addProject, isAdding } = useAddProject();
  const { editProject, isEditting } = useEditProject();

  const onHandleSubmit = async (data) => {
    const newProject = {
      ...data,
      tags: selectedTags.map((t) => t.text),
    };

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
      <DatePickerField
        label="ددلاین"
        name="deadline"
        control={control}
        errors={errors}
        required
        validationSchema={{
          required: "ددلاین ضروری است",
        }}
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
        errors={errors}
        validationSchema={{
          required: "دسته بندی ضروری است",
        }}
        required
        options={
          isCategoring
            ? [{ id: "1", value: "", title: "در حال بارگذاری..." }]
            : transformedCategories
        }
      />
      <TagInput
        tags={selectedTags}
        setTags={setSelectedTags}
        label="تگ ها"
        placeholder="نمونه : برنامه نویسی یا UI/UX"
      />
      {(editId ? isEditting : isAdding) ? (
        <Sppiner />
      ) : (
        <Button classes="w-full">تایید</Button>
      )}
    </form>
  );
}

export default OwnerProjectModal;
