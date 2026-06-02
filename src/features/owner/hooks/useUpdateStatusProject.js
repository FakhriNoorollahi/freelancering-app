import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateStatusProjectApi } from "@/services/projectService";

export default function useUpdateStatusProject() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingStatus, mutateAsync: updateStatusProject } =
    useMutation({
      mutationFn: updateStatusProjectApi,
      onSuccess: ({ message }) => {
        toast.success(message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    });

  return { isUpdatingStatus, updateStatusProject };
}
