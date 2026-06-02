import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import useOutsideClick from "@/hooks/useOutsideClick";
import Sidebar from "./Sidebar";
import Header from "./header";

function AppLayout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useOutsideClick(() => setIsOpen(false));

  useEffect(() => {
    function handleWindowResize(e) {
      const windowWidth = e.target.innerWidth;
      if (windowWidth > 1024) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleWindowResize);

    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <div className="relative flex bg-white max-w-360 mx-auto">
      {isOpen && (
        <div className="absolute inset-0 bg-brand-secondary/70 blur-xs z-50"></div>
      )}
      <div
        ref={ref}
        className={`transition-all duration-300 ease-in-out w-68 fixed top-0 z-100 lg:z-0 lg:static lg:block bg-white h-full lg:translate-x-0 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
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
