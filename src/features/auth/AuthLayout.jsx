function AuthLayout({ children }) {
  return (
    <div className="flex h-screen p-5 bg-background">
      <div className="w-2/5 px-24 space-y-5">{children}</div>
      <div className="w-3/5">
        <img
          className="size-full rounded-lg"
          src="/public/images/image.jpg"
          alt="تصویر فریلنسر"
        />
      </div>
    </div>
  );
}
export default AuthLayout;
