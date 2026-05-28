import { useMutation, useQuery } from "@tanstack/react-query";
import { getProposalsListApi } from "../services/proposalService";
import { changeProposalStatusApi } from "../services/proposalService";
import toast from "react-hot-toast";

export function useProposalLists() {
  const { data, isPending } = useQuery({
    queryKey: ["all-proposals"],
    queryFn: getProposalsListApi,
  });

  const { proposals } = data || {};

  return { proposals, isPending };
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
