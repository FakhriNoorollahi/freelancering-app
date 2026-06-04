import CustomToast from "@/ui/CustomToast";
import React from "react";
import toast from "react-hot-toast";

const toastOptions = {
  duration: 3000,
  position: "top-center",
};

let currentToastId = null;

const showToastWithDismiss = (type, message, options = {}) => {
  if (currentToastId) {
    toast.dismiss(currentToastId);
    currentToastId = null;

    setTimeout(() => {
      const id = toast.custom(
        (t) => React.createElement(CustomToast, { t, message, type }),
        { ...toastOptions, ...options },
      );
      currentToastId = id;
    }, 150);
  } else {
    const id = toast.custom(
      (t) => React.createElement(CustomToast, { t, message, type }),
      { ...toastOptions, ...options },
    );
    currentToastId = id;
  }
};

export const showCustomToast = {
  success: (message, options = {}) => {
    showToastWithDismiss("success", message, options);
  },
  error: (message, options = {}) => {
    showToastWithDismiss("error", message, options);
  },
  info: (message, options = {}) => {
    showToastWithDismiss("info", message, options);
  },
};
