import { useQuery } from "@tanstack/react-query";
import { getOwnerProjectsApi } from "../services/projectService";

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects: allProjects } = data || {};

  return { allProjects, isPending };
}
