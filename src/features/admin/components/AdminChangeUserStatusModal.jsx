import { useForm } from "react-hook-form";
import useChangeUserStatus from "../hooks/useChangeUserStatus";
import Select from "@/ui/Select";
import USER_PROPOSAL_STATUS_DATA from "@/constants/userProposalStatusData";
import Sppiner from "@/ui/Sppiner";
import Button from "@/ui/Button";

function AdminChangeUserStatusModal({ userId, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { isUpdating, changeUserStatus } = useChangeUserStatus();

  const onSubmit = async (data) => {
    console.log(userId, data);

    await changeUserStatus(
      { userId, data },
      {
        onSuccess: () => {
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

export default AdminChangeUserStatusModal;
