import { useMutation } from "@tanstack/react-query";
import { changeProposalStatusApi } from "@/services/proposalService";
import { showCustomToast } from "@/utils/showCustomToast";

export function useUpdateProposalStatus() {
  const { mutateAsync: changeProposalStatus, isPending: isUpdating } =
    useMutation({
      mutationFn: changeProposalStatusApi,
      onSuccess: ({ message }) => {
        showCustomToast.success(message);
      },
      onError: (error) => {
        showCustomToast.error(error?.response?.data?.message);
      },
    });

  return { changeProposalStatus, isUpdating };
}

export default useUpdateProposalStatus;
