import { useQuery } from "@tanstack/react-query";
import getCategories from "../services/categoryService";

export function useGetCategory() {
  const { data, isPending } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  const { categories } = data || {};

  return { categories, isPending };
}
