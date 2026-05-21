import { Outlet } from "react-router-dom";
import Header from "./Header";

function AppLayout({ children }) {
  return (
    <div className="bg-white grid grid-cols-12 h-screen">
      <div className="col-span-2 space-y-5 h-full py-3 px-4">
        <div className="flex justify-center">
          <img src="/public/images/logo.jpg" className="size-20 rounded-full" />
        </div>
        <h4 className="text-center text-font-primary font-black">
          وب سایت فریلنسری
        </h4>
        <hr className="text-font-primary/50 mb-8" />
        {children}
      </div>
      <div className="col-span-10 h-full">
        <Header />
        <div className="flex flex-col bg-background h-[calc(100vh-70px)] rounded-tr-[50px] text-font-primary overflow-y-auto">
          <div className="p-12 flex-1">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
