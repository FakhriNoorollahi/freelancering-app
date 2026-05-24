import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useState } from "react";
import useOutsideClick from "../hooks/useOutsideClick";

function AppLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  return (
    <div className="flex bg-white">
      {isOpen && (
        <div className="fixed top-0 left-0 h-screen w-full bg-brand-secondary/40 backdrop-blur-xs"></div>
      )}
      <div
        ref={ref}
        className={`transition-all duration-300 ease-in-out w-68 fixed top-0 z-40 lg:static lg:block bg-white h-full lg:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <Sidebar onClose={() => setIsOpen(false)}>{children}</Sidebar>
      </div>
      <div className="flex-1">
        <Header onOpen={() => setIsOpen(true)} />
        <div className="flex flex-col bg-background h-[calc(100vh-74px)]  lg:rounded-tr-[50px] text-font-primary overflow-y-auto">
          <div className="p-12 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
