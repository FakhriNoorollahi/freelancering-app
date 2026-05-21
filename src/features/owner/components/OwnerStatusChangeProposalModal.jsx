import { useForm } from "react-hook-form";
import Select from "../../../ui/Select";
import Button from "../../../ui/Button";
import { useChangeProposalStatus } from "../../../hooks/useProposal";
import Sppiner from "../../../ui/Sppiner";
import { useQueryClient } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import proposalStatusData from "../../../constants/proposalStatusData";

function OwnerStatusChangeProposalModal({ proposalId, onClose }) {
  const { id: projectId } = useParams();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const queryClient = useQueryClient();
  const { changeProposalStatus, isUpdating } = useChangeProposalStatus();

  const onSubmit = async (data) => {
    await changeProposalStatus(
      { proposalId, data },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["project", projectId],
          });
          onClose();
        },
      },
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-7">
      <Select
        errors={errors}
        label="تغییر وضعیت"
        register={register}
        name="status"
        options={proposalStatusData}
        required
        validationSchema={{
          required: "یکی از گزینه ها را انتخاب کنید",
        }}
      />
      {isUpdating ? <Sppiner /> : <Button classes="w-full">تایید</Button>}
    </form>
  );
}

export default OwnerStatusChangeProposalModal;
