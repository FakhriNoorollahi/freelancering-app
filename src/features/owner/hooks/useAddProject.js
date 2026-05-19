import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addProjectApi } from "../../../services/projectService";
import toast from "react-hot-toast";

export default function useAddProject() {
  const queryClient = useQueryClient();

  const { isPending: isAdding, mutateAsync: addProject } = useMutation({
    mutationFn: addProjectApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["owner-projects"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isAdding, addProject };
}
