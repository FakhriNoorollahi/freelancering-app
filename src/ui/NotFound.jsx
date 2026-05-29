import { toPersianNumbers } from "../utils/toPersianNumber";

function NotFound() {
  return (
    <div className="bg-background p-6 h-screen w-screen flex flex-col items-center justify-center gap-y-5 text-brand-secondary">
      <div className="bg-white p-8 rounded-md shadow-lg">
        <p className=" text-9xl font-extrabold text-center text-shadow">
          {toPersianNumbers(404)}
        </p>
        <div className="flex items-center w-full gap-2 mb-5">
          <div className="border-b-4 border-double border-border-opacity flex-1"></div>
          <div>⭐⭐⭐</div>
          <div className="border-b-4 border-double border-border-opacity flex-1"></div>
        </div>
        <p className="text-center text-2xl sm:text-3xl font-extrabold">
          صفحه ی مورد نظر پیدا نشد!
        </p>
      </div>
    </div>
  );
}

export default NotFound;
