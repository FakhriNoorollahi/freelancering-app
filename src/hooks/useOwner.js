import { useMutation, useQuery } from "@tanstack/react-query";
import { addProject, getProjects } from "../services/ownerService";

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getProjects,
  });

  return { data, isPending };
}

export function useAddProject() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: addProject,
  });

  return { data, isPending, mutateAsync };
}
