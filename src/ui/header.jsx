import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";

function Header() {
  return (
    <div className="col-span-12 flex items-center justify-between py-3 px-7">
      <div className="flex items-center gap-x-2">
        <h4 className="text-font-primary">سلام فخری نوراللهی</h4>
        <span className="text-brand-secondary">|</span>
        <h6 className="text-brand-secondary">عصر بخیر</h6>
      </div>
      <div>
        <button className="border border-solid border-border-opacity hover:bg-danger/5 hover:border-danger/5 p-1 rounded-2xl cursor-pointer group">
          <ArrowLeftEndOnRectangleIcon className="size-8 text-brand-secondary group-hover:text-danger" />
        </button>
      </div>
    </div>
  );
}

export default Header;
