import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addProjectApi,
  getOwnerProjectsApi,
  getProjectApi,
  updateProjectApi,
} from "../services/projectService";

export function useOwnerProject(id) {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects", id],
    queryFn: () => getProjectApi(id),
  });
  const { project } = data || {};
  return { project, isPending };
}

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects: allProjects } = data || {};

  return { allProjects, isPending };
}
