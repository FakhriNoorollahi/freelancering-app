import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { addProposalApi } from "@/services/proposalService";

export function useAddProposal() {
  const queryClient = useQueryClient();
  const { mutateAsync: addProposal, isPending: isCreatingProposal } =
    useMutation({
      mutationFn: addProposalApi,
      onSuccess: ({ message }) => {
        toast.success(message);
        queryClient.invalidateQueries({ queryKey: ["all-proposals"] });
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    });

  return { addProposal, isCreatingProposal };
}
