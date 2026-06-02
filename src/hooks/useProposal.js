import {
  changeProposalStatusApi,
  getProposalsListApi,
} from "@/services/proposalService";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useProposalLists() {
  const { data: allProposals, isPending: isProposaling } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getProposalsListApi,
  });

  const { proposals } = allProposals || {};

  return { proposals, isProposaling };
}

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
