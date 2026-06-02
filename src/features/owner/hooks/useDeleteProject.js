import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { deleteProjectApi } from "@/services/projectService";

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
