import { useQuery } from "@tanstack/react-query";
import { userListApi } from "@/services/authService";

function useUsers() {
  const { data, isPending: isUsering } = useQuery({
    queryKey: ["users"],
    queryFn: userListApi,
  });

  const { users } = data || {};
  return { users, isUsering };
}
export default useUsers;
