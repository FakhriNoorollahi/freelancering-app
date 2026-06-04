import {
  BellAlertIcon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/16/solid";
import toast from "react-hot-toast";

const icons = {
  success: <CheckCircleIcon className="w-5 h-5 text-success" />,
  error: <XCircleIcon className="w-5 h-5 text-danger" />,
  info: <BellAlertIcon className="w-5 h-5 text-tag" />,
  custom: null,
};

function CustomToast({ t, message, type }) {
  return (
    <div
      className={`${
        t.visible ? "animate-custom-enter" : "animate-custom-leave"
      }  bg-white shadow-lg rounded-md pointer-events-auto flex`}
    >
      <div className="flex items-center gap-1 border-l border-border-opacity p-2">
        <span>{icons[type]}</span>
        <span>{message}</span>
      </div>
      <button
        className="p-2 flex items-center justify-center text-sm font-medium text-danger hover:text-danger/80 focus:ring-danger/80"
        onClick={() => toast.dismiss(t.id)}
      >
        رد کردن
      </button>
    </div>
  );
}

export default CustomToast;
