import Modal from "../../ui/Modal";
import TextField from "../../ui/TextField";
import Select from "../../ui/Select";
import DatePickerField from "../../ui/DatePickerField";
import TagsField from "../../ui/TagsField";
import Button from "../../ui/Button";
import Sppiner from "../../ui/Sppiner";
import { useAddProject, useUpdateProject } from "../../hooks/useOwner";
import { useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function OwnerProjectModal({ setIsOpenModal, editValues, setEditValues }) {
  const { id, ...editDefaultValues } = editValues || {};
  const queryClient = useQueryClient();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm({ defaultValues: editDefaultValues });

  const { mutateAsync: createProject, isPending: isCreatingProject } =
    useAddProject();

  const { mutateAsync: updateProject, isPending: isUpdatingProject } =
    useUpdateProject();

  const onHandleSubmit = async (data) => {
    const req = {
      ...data,
      deadline: new Date(),
      tags: [],
    };

    if (!isDirty) {
      setIsOpenModal(false);
      setEditValues(null);
      return;
    }

    if (id) {
      await updateProject(
        { id, data: req },
        {
          onSuccess: ({ message }) => {
            setIsOpenModal(false);
            queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
            toast.success(message);
          },
          onError: () => {
            setIsOpenModal(false);
          },
        },
      );
    } else {
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
    }

    setEditValues(null);
  };

  return (
    <Modal
      onClose={() => {
        setEditValues(null);
        setIsOpenModal(false);
      }}
      title="اضافه کردن پروژه جدید"
    >
      <form
        className="flex flex-col gap-y-4 max-h-96 overflow-y-auto scroll-mr-56 pl-4"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
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
          options={[
            {
              id: 1,
              title: "برنامه نویسی",
              value: "6a08612d903e3da1a532003e",
            },
          ]}
          required
        />
        <TagsField label="کلمات کلیدی" />
        <DatePickerField label="ددلاین" date="date" setDate={() => {}} />
        {(id ? isUpdatingProject : isCreatingProject) ? (
          <Sppiner />
        ) : (
          <Button classes="w-full">تایید</Button>
        )}
      </form>
    </Modal>
  );
}

export default OwnerProjectModal;
