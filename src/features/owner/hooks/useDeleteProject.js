import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "../../../services/projectService";
import toast from "react-hot-toast";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutateAsync: deleteProject } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isDeleting, deleteProject };
}
