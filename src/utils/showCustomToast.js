import CustomToast from "@/ui/CustomToast";
import React from "react";
import toast from "react-hot-toast";

const toastOptions = { duration: 3000, position: "top-center" };

export const showCustomToast = {
  success: (message, options = {}) => {
    toast.custom(
      (t) => React.createElement(CustomToast, { t, message, type: "success" }),
      { ...toastOptions, ...options },
    );
  },
  error: (message, options = {}) => {
    toast.custom(
      (t) => React.createElement(CustomToast, { t, message, type: "error" }),
      { ...toastOptions, ...options },
    );
  },
  info: (message, options = {}) => {
    toast.custom(
      (t) => React.createElement(CustomToast, { t, message, type: "info" }),
      {
        ...toastOptions,
        ...options,
      },
    );
  },
};
