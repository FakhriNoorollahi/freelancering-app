import { Outlet } from "react-router-dom";
import Header from "./header";

function AppLayout({ children }) {
  return (
    <div className="bg-white grid grid-cols-12 h-screen">
      <div className="col-span-2 space-y-5 h-full  px-3">
        <div className="flex justify-center ">
          <img src="/public/images/logo.jpg" className="size-24 rounded-full" />
        </div>
        <h3 className="text-center">وب سایت فریلنسری</h3>
        <hr className="text-font-secondary/50 mb-14" />
        {children}
      </div>
      <div className="col-span-10 h-full">
        <Header />
        <div className="bg-background h-[calc(100vh-70px)] rounded-tr-[50px] p-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
