import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateStatusProjectApi } from "@/services/projectService";
import { showCustomToast } from "@/utils/showCustomToast";

export default function useUpdateStatusProject() {
  const queryClient = useQueryClient();
  const { isPending: isUpdatingStatus, mutateAsync: updateStatusProject } =
    useMutation({
      mutationFn: updateStatusProjectApi,
      onSuccess: ({ message }) => {
        showCustomToast.success(message);
        queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
      },
      onError: (error) => {
        showCustomToast.error(error?.response?.data?.message);
      },
    });

  return { isUpdatingStatus, updateStatusProject };
}
