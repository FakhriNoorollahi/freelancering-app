import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getProjectApi } from "@/services/projectService";

export function useProject() {
  const { id } = useParams();
  const { data, isPending: isProjecting } = useQuery({
    queryKey: ["project", id],
    queryFn: () => getProjectApi(id),
  });
  const { project } = data || {};
  return { project, isProjecting };
}
