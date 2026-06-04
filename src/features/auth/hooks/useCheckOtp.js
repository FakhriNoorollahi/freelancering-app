import { useMutation } from "@tanstack/react-query";
import { checkOtpApi } from "@/services/authService";
import { showCustomToast } from "@/utils/showCustomToast";

export function useCheckOtp() {
  const { mutateAsync: checkOtp, isPending: isCheckingOtp } = useMutation({
    mutationFn: checkOtpApi,
    onSuccess: ({ message, user }) => {
      if (user.status == 2) {
        showCustomToast.success(message);
      }
    },
    onError: (error) => {
      showCustomToast.error(error?.response?.data?.message);
    },
  });

  return { checkOtp, isCheckingOtp };
}
