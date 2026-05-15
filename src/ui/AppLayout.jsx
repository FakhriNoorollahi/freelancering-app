import { Outlet } from "react-router-dom";
import Header from "./header";

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
        <div className="bg-background min-h-[calc(100vh-70px)] rounded-tr-[50px] p-12 text-font-primary">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AppLayout;
