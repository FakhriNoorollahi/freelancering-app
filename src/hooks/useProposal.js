import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "../services/proposalService";
import toast from "react-hot-toast";

export function useChangeProposalStatus() {
  const { mutateAsync: changeProposalStatus, isPending: isUpdating } =
    useMutation({
      mutationFn: changeProposalStatusApi,
      onSuccess: ({ message }) => {
        toast.success(message);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    });

  return { changeProposalStatus, isUpdating };
}
