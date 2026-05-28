import { useQuery } from "@tanstack/react-query";
import {
  getListProject,
  getOwnerProjectsApi,
} from "../services/projectService";

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects: allProjects } = data || {};

  return { allProjects, isPending };
}

export function useProjectLists() {
  const { data, isPending } = useQuery({
    queryKey: ["all-projects"],
    queryFn: getListProject,
  });

  const { projects } = data || {};

  return { projects, isPending };
}
