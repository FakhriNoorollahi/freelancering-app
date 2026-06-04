import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProjectApi } from "@/services/projectService";
import { showCustomToast } from "@/utils/showCustomToast";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const { isPending: isEditting, mutateAsync: editProject } = useMutation({
    mutationFn: updateProjectApi,
    onSuccess: ({ message }) => {
      showCustomToast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (error) => {
      showCustomToast.error(error?.response?.data?.message);
    },
  });

  return { isEditting, editProject };
}
