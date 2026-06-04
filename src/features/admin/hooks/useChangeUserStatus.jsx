import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userChangeUserStatusApi } from "@/services/authService";
import { showCustomToast } from "@/utils/showCustomToast";

function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutateAsync: changeUserStatus } = useMutation({
    mutationFn: userChangeUserStatusApi,
    onSuccess: ({ message }) => {
      showCustomToast.success(message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      showCustomToast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, changeUserStatus };
}

export default useChangeUserStatus;
