import { useMutation } from "@tanstack/react-query";
import { checkOtpApi } from "@/services/authService";
import toast from "react-hot-toast";

export function useCheckOtp() {
  const { mutateAsync: checkOtp, isPending: isCheckingOtp } = useMutation({
    mutationFn: checkOtpApi,
    onSuccess: ({ message }) => {
      toast.success(message);
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { checkOtp, isCheckingOtp };
}
