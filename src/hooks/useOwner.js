import { getListProject, getOwnerProjectsApi } from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects: allProjects } = data || {};

  return { allProjects, isPending };
}

export function useProjectLists() {
  const { search } = useLocation();

  const { data, isPending } = useQuery({
    queryKey: ["all-projects", search],
    queryFn: () => getListProject(search),
  });

  const { projects } = data || {};

  return { projects, isPending };
}
