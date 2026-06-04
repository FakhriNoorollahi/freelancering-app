import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProposalApi } from "@/services/proposalService";
import { showCustomToast } from "@/utils/showCustomToast";

export function useAddProposal() {
  const queryClient = useQueryClient();
  const { mutateAsync: addProposal, isPending: isCreatingProposal } =
    useMutation({
      mutationFn: addProposalApi,
      onSuccess: ({ message }) => {
        showCustomToast.success(message);
        queryClient.invalidateQueries({ queryKey: ["all-proposals"] });
      },
      onError: (error) => {
        showCustomToast.error(error?.response?.data?.message);
      },
    });

  return { addProposal, isCreatingProposal };
}
