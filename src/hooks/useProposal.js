import { useMutation } from "@tanstack/react-query";
import { updateProposal } from "../services/proposalService";

export function useUpdateProposal() {
  const { data, mutateAsync, isPending } = useMutation({
    mutationFn: updateProposal,
  });

  return { data, mutateAsync, isPending };
}
