function AuthLayout({ children }) {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-[url(/public/images/background.jpg)] bg-no-repeat bg-center bg-cover blur-xs scale-110"></div>
      <div className="absolute inset-0 bg-font-primary/65"></div>
      <div className="relative center-all h-full p-4 sm:px-0">
        <div className="w-auto sm:w-98 bg-background p-6 rounded-lg text-font-primary">
          <img
            src="/public/images/logo.jpg"
            alt="لوگو"
            className="size-18 rounded-full mx-auto mb-3"
          />
          {children}
        </div>
      </div>
    </div>
  );
}
export default AuthLayout;
