import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addProject,
  deleteProject,
  getProject,
  getProjects,
  updateProject,
} from "../services/ownerService";

export function useOwnerProject(id) {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects", id],
    queryFn: () => getProject(id),
  });
  const { project } = data || {};
  return { project, isPending };
}

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getProjects,
  });
  const { projects: allProjects } = data || {};

  return { allProjects, isPending };
}

export function useAddProject() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: addProject,
  });

  return { data, isPending, mutateAsync };
}

export function useUpdateProject() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: updateProject,
  });

  return { data, isPending, mutateAsync };
}

export function useDeleteProject() {
  const { data, isPending, mutateAsync } = useMutation({
    mutationFn: deleteProject,
  });

  return { data, isPending, mutateAsync };
}
