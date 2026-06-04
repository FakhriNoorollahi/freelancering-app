import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { logoutApi, profileApi } from "@/services/authService";

export function useLogout() {
  const queryClient = useQueryClient();
  const { mutateAsync: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.removeQueries();
    },
  });

  return { logout };
}

export function useProfile() {
  const { data, isPending: isProfiling } = useQuery({
    queryKey: ["profile"],
    queryFn: profileApi,
    retry: false,
  });

  const { user } = data || {};
  return { user, isProfiling };
}
