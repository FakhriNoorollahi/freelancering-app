import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="col-span-12 flex items-center justify-between py-3 px-7">
      <div className="flex items-center gap-x-2">
        <h4>سلام فخری نوراللهی</h4>
        <span className="text-font-secondary">|</span>
        <h6 className="text-font-secondary">عصر بخیر</h6>
      </div>
      <div>
        <button className="border border-solid border-body-input p-1 rounded-2xl cursor-pointer hover:shadow-xs group">
          <ArrowLeftEndOnRectangleIcon className="size-8 text-font-primary group-hover:text-brand-primary" />
        </button>
      </div>
    </div>
  );
}

export default Header;
