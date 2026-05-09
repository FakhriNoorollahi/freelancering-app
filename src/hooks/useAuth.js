import { useMutation } from "@tanstack/react-query";
import { checkOtp, completeProfile, getOtp } from "../services/authService";

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
