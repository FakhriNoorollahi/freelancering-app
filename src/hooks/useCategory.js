import { getCategoryListApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useGetCategory() {
  const { data, isPending: isCategoring } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategoryListApi,
  });

  const { categories: categoriesRaw = [] } = data || {};

  const transformedCategories = categoriesRaw?.map((c) => {
    return { id: c._id, title: c.title, value: c._id };
  });

  const transformedEnglisCategories = categoriesRaw?.map((c) => {
    return { id: c._id, title: c.title, value: c.englishTitle };
  });

  return {
    categoriesRaw,
    isCategoring,
    transformedCategories,
    transformedEnglisCategories,
  };
}
