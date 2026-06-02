import { getOwnerProjectsApi } from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";

export function useOwnerProjects() {
  const { data, isPending } = useQuery({
    queryKey: ["owner-projects"],
    queryFn: getOwnerProjectsApi,
  });
  const { projects: allProjects } = data || {};

  return { allProjects, isPending };
}
