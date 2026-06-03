import { completeProfileApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCompleteProfile() {
  const { mutateAsync: completeProfile, isPending: isCompletingProfile } =
    useMutation({
      mutationFn: completeProfileApi,
      onSuccess: ({ message }) => {
        toast.success(message);
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    });

  return { isCompletingProfile, completeProfile };
}
