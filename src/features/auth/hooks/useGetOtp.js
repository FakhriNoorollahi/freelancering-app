import { getOtpApi } from "@/services/authService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

function useGetOtp() {
  const { mutateAsync: getOtp, isPending: isGetingOtp } = useMutation({
    mutationFn: getOtpApi,
    onSuccess: ({ message }) => {
      toast.success(message, { duration: 10000 });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isGetingOtp, getOtp };
}

export default useGetOtp;
