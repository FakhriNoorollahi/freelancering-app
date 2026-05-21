import { XCircleIcon } from "@heroicons/react/24/outline";

function Modal({ open, children, title, onClose }) {
  return (
    open && (
      <div className="fixed top-0 left-0 h-screen w-full bg-brand-secondary/40 backdrop-blur-xs center-all">
        <div className="bg-white rounded-xl p-6 w-80 sm:w-110">
          <div className="flex justify-between items-center border-b border-border pb-2 mb-5">
            <p className="text-base font-bold">{title}</p>
            <button onClick={onClose} className="cursor-pointer">
              <XCircleIcon className="size-6 text-danger" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
