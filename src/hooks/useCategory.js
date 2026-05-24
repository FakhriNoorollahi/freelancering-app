import { useQuery } from "@tanstack/react-query";
import { getCategoryList } from "../services/categoryService";

export default function useGetCategory() {
  const { data, isPending: isCategoring } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryList,
  });

  const { categories: categoriesRaw = [] } = data || {};

  const transformedCategories = categoriesRaw?.map((c) => {
    return { id: c._id, title: c.title, value: c._id };
  });

  return { categoriesRaw, isCategoring, transformedCategories };
}
