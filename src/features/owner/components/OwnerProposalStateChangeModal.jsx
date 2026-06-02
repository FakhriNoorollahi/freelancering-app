import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";
import { useChangeProposalStatus } from "@/hooks/useProposal";
import Select from "@/ui/Select";
import USER_PROPOSAL_STATUS_DATA from "@/constants/userProposalStatusData";
import Button from "@/ui/Button";
import Sppiner from "@/ui/Sppiner";

function OwnerProposalStateChangeModal({ proposalId, onClose }) {
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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
      <Select
        errors={errors}
        label="تغییر وضعیت"
        register={register}
        name="status"
        options={USER_PROPOSAL_STATUS_DATA}
        required
        validationSchema={{
          required: "یکی از گزینه ها را انتخاب کنید",
        }}
      />
      {isUpdating ? <Sppiner /> : <Button classes="w-full">تایید</Button>}
    </form>
  );
}

export default OwnerProposalStateChangeModal;
