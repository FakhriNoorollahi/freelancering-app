import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateProjectApi } from "../../../services/projectService";
import toast from "react-hot-toast";

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
