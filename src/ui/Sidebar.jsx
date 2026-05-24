import { XCircleIcon } from "@heroicons/react/24/outline";

function Sidebar({ children, onClose }) {
  return (
    <div className="space-y-2 py-3 px-4">
      <button
        onClick={onClose}
        className="block lg:hidden mr-auto text-font-primary"
      >
        <XCircleIcon className="size-7" />
      </button>
      <div className="flex justify-center mb-5">
        <img src="/public/images/logo.jpg" className="size-20 rounded-full" />
      </div>
      <h4 className="text-center text-font-primary font-black mb-5">
        فریلنس تو
      </h4>
      <hr className="text-font-primary/50 mb-8" />
      {children}
    </div>
  );
}

export default Sidebar;
