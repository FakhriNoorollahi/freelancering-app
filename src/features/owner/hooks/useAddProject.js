import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProjectApi } from "@/services/projectService";
import { showCustomToast } from "@/utils/showCustomToast";

export default function useAddProject() {
  const queryClient = useQueryClient();

  const { isPending: isAdding, mutateAsync: addProject } = useMutation({
    mutationFn: addProjectApi,
    onSuccess: ({ message }) => {
      showCustomToast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (error) => {
      showCustomToast.error(error?.response?.data?.message);
    },
  });

  return { isAdding, addProject };
}
