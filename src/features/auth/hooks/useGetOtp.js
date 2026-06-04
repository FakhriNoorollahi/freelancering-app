import { getOtpApi } from "@/services/authService";
import { showCustomToast } from "@/utils/showCustomToast";
import { useMutation } from "@tanstack/react-query";

function useGetOtp() {
  const { mutateAsync: getOtp, isPending: isGetingOtp } = useMutation({
    mutationFn: getOtpApi,
    onSuccess: ({ message }) => {
      showCustomToast.success(message, { duration: 15000 });
    },
    onError: (error) => {
      showCustomToast.error(error?.response?.data?.message);
    },
  });

  return { isGetingOtp, getOtp };
}

export default useGetOtp;
