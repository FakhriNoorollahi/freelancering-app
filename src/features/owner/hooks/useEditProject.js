import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { updateProjectApi } from "@/services/projectService";

export default function useEditProject() {
  const queryClient = useQueryClient();
  const { isPending: isEditting, mutateAsync: editProject } = useMutation({
    mutationFn: updateProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isEditting, editProject };
}
