import { getProposalsListApi } from "@/services/proposalService";
import { useQuery } from "@tanstack/react-query";

export function useProposalsList() {
  const { data: allProposals, isPending: isProposaling } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getProposalsListApi,
  });

  const { proposals } = allProposals || {};

  return { proposals, isProposaling };
}

export default useProposalsList;
