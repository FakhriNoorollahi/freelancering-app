function AuthLayout({ children }) {
  return (
    <div className="bg-cover bg-[url(/public/images/background.jpg)] bg-no-repeat bg-top-left h-screen">
      <div className="bg-font-primary/60 backdrop-blur-xs h-full flex items-center justify-center">
        <div className="w-98 bg-background p-6 rounded-lg text-font-primary">
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
