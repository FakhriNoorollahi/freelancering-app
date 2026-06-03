import { useMutation, useQuery } from "@tanstack/react-query";
import { logoutApi, profileApi } from "@/services/authService";

export function useLogout() {
  const { mutateAsync: logout } = useMutation({
    mutationFn: logoutApi,
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
