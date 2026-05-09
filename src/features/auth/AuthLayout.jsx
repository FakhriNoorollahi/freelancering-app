function AuthLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-5 p-4 md:p-6 bg-background">
      <div className="grid grid-cols-1 md:grid-cols-12 col-span-1 md:col-span-6 min-h-[calc(100vh-200px)] md:min-h-0">
        <div className="col-span-1 md:col-span-8 md:col-start-3 flex flex-col justify-center gap-y-10 ">
          {children}
        </div>
      </div>
      <div className="col-span-1 md:col-span-6 flex flex-col items-center justify-center py-8 md:py-0 md:h-[calc(100vh-48px)]  rounded-lg overflow-hidden">
        <img
          className="size-full"
          src="/public/images/image.jpg"
          alt="تصویر فریلنسر"
        />
      </div>
    </div>
  );
}
export default AuthLayout;
