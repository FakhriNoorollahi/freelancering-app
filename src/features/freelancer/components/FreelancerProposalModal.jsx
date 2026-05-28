import Modal from "../../../ui/Modal";
import TextField from "../../../ui/TextField";
import Button from "../../../ui/Button";
import Sppiner from "../../../ui/Sppiner";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useAddProposal } from "../../../hooks/useProposal";

function FreelancerProposalModal({ onClose, projectId }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isPending: isCreatingProposal, mutateAsync } = useAddProposal();

  const onHandleSubmit = async (data) => {
    const res = { projectId, ...data };

    await mutateAsync(res, {
      onSuccess: ({ message }) => {
        toast.success(message);
        onClose();
      },
      onError: () => {
        onClose();
      },
    });
  };

  return (
    <Modal onClose={onClose} title="درخواست انجام پروژه">
      <form
        className="flex flex-col overflow-y-auto scroll-mr-56"
        onSubmit={handleSubmit(onHandleSubmit)}
      >
        <div className="mb-2">
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
            name="price"
            label="قیمت"
            placeholder="نمونه: 200000"
            errors={errors}
            validationSchema={{
              required: "قیمت ضروری است",
            }}
            required
          />
          <TextField
            register={register}
            label="مدت زمان"
            name="duration"
            placeholder="نمونه: 30 روز "
            errors={errors}
            validationSchema={{
              required: "مدت زمان ضروری است",
            }}
            required
          />
        </div>

        {isCreatingProposal ? (
          <Sppiner />
        ) : (
          <Button classes="w-full">تایید</Button>
        )}
      </form>
    </Modal>
  );
}

export default FreelancerProposalModal;
