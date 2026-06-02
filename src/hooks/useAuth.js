import { useMutation, useQuery } from "@tanstack/react-query";
import {
  checkOtp,
  completeProfile,
  getOtp,
  logout,
  profile,
} from "@/services/authService";

export function useGetOtp() {
  const { data, mutateAsync, isPending } = useMutation({
    mutationFn: getOtp,
  });

  return { data, isPending, mutateAsync };
}

export function useCheckOtp() {
  const { data, mutateAsync, isPending } = useMutation({
    mutationFn: checkOtp,
  });

  return { data, isPending, mutateAsync };
}

export function useCompleteProfile() {
  const { data, mutateAsync, isPending } = useMutation({
    mutationFn: completeProfile,
  });

  return { data, isPending, mutateAsync };
}

export function useLogout() {
  const { mutateAsync } = useMutation({
    mutationFn: logout,
  });

  return { mutateAsync };
}

export function useProfile() {
  const { data, isPending } = useQuery({
    queryKey: ["profile"],
    queryFn: profile,
    retry: false,
  });

  const { user } = data || {};
  return { user, isPending };
}
