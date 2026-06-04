import { completeProfileApi } from "@/services/authService";
import { showCustomToast } from "@/utils/showCustomToast";
import { useMutation } from "@tanstack/react-query";

export function useCompleteProfile() {
  const { mutateAsync: completeProfile, isPending: isCompletingProfile } =
    useMutation({
      mutationFn: completeProfileApi,
      onSuccess: ({ message }) => {
        showCustomToast.success(message);
      },
      onError: (error) => {
        showCustomToast.error(error?.response?.data?.message);
      },
    });

  return { isCompletingProfile, completeProfile };
}
