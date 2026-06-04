import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteProjectApi } from "@/services/projectService";
import { showCustomToast } from "@/utils/showCustomToast";

export function useDeleteProject() {
  const queryClient = useQueryClient();
  const { isPending: isDeleting, mutateAsync: deleteProject } = useMutation({
    mutationFn: deleteProjectApi,
    onSuccess: ({ message }) => {
      showCustomToast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (error) => {
      showCustomToast.error(error?.response?.data?.message);
    },
  });

  return { isDeleting, deleteProject };
}
