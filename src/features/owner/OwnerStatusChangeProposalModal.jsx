import { useForm } from "react-hook-form";
import Modal from "../../ui/Modal";
import Select from "../../ui/Select";
import Button from "../../ui/Button";
import { useUpdateProposal } from "../../hooks/useProposal";
import toast from "react-hot-toast";
import Sppiner from "../../ui/Sppiner";
import { useQueryClient } from "@tanstack/react-query";

const statusOptions = [
  { id: 0, value: 0, title: "رد شده" },
  { id: 1, value: 1, title: "در انتظار تایید" },
  { id: 2, value: 2, title: "تایید شده" },
];

function OwnerStatusChangeProposalModal({
  setIsOpenModal,
  projectId,
  proposalId,
}) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();

  const { isPending, mutateAsync } = useUpdateProposal();

  const onHandle = async (data) => {
    const req = { ...data, projectId };

    await mutateAsync(
      { proposalId, ...req },
      {
        onSuccess: ({ message }) => {
          toast.success(message);
          setIsOpenModal(false);
          queryClient.invalidateQueries({
            queryKey: ["owner-projects", projectId],
          });
        },
        onError: () => {
          setIsOpenModal(false);
        },
      },
    );
  };

  return (
    <Modal onClose={() => setIsOpenModal(false)} title="تغییر وضعیت پروپوزال">
      <form onSubmit={handleSubmit(onHandle)} className="space-y-7">
        <Select
          errors={errors}
          label="تغییر وضعیت"
          register={register}
          name="status"
          options={statusOptions}
          required
          validationSchema={{
            required: "یکی از گزینه ها را انتخاب کنید",
          }}
        />
        {isPending ? <Sppiner /> : <Button classes="w-full">تایید</Button>}
      </form>
    </Modal>
  );
}

export default OwnerStatusChangeProposalModal;
