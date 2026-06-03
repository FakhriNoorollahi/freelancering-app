import { getListProject } from "@/services/projectService";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export function useProjectsList() {
  const { search } = useLocation();

  const { data, isPending: isProjectingList } = useQuery({
    queryKey: ["all-projects", search],
    queryFn: () => getListProject(search),
  });

  const { projects } = data || {};

  return { projects, isProjectingList };
}
