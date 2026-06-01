import { XCircleIcon } from "@heroicons/react/24/outline";
import useOutsideClick from "../hooks/useOutsideClick";

function Modal({ open, children, title, onClose }) {
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="fixed w-full h-screen top-0 left-0 z-1000">
        <div className="absolute inset-0 bg-brand-secondary/85 blur-3xl scale-150 z-100"></div>
        <div className="absolute inset-0 center-all">
          <div
            ref={ref}
            className="bg-white rounded-xl p-6 w-80 sm:w-110 z-100"
          >
            <div className="flex justify-between items-center border-b border-border pb-2 mb-5">
              <p className="text-base font-bold">{title}</p>
              <button onClick={onClose} className="cursor-pointer">
                <XCircleIcon className="size-6 text-danger" />
              </button>
            </div>
            {children}
          </div>
        </div>
      </div>
    )
  );
}

export default Modal;
