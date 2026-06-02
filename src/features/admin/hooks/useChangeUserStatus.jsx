import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { userChangeUserStatusApi } from "@/services/authService";

function useChangeUserStatus() {
  const queryClient = useQueryClient();
  const { isPending: isUpdating, mutateAsync: changeUserStatus } = useMutation({
    mutationFn: userChangeUserStatusApi,
    onSuccess: ({ message }) => {
      toast.success(message);
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });

  return { isUpdating, changeUserStatus };
}

export default useChangeUserStatus;
