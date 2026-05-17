import { useMutation, useQuery } from "@tanstack/react-query";
import { addProposal, getProposalsList } from "../services/proposalService";

export function useAddProposal() {
  const { data, mutateAsync, isPending } = useMutation({
    mutationFn: addProposal,
  });

  return { data, isPending, mutateAsync };
}

export function useProposalLists() {
  const { data, isPending } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getProposalsList,
  });

  const { proposals } = data || {};

  return { proposals, isPending };
}
