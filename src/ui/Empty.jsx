import { FolderOpenIcon } from "@heroicons/react/24/outline";

function Empty({ title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <FolderOpenIcon className="size-14 lg:size-25 text-brand-secondary/80" />
      <p className="text-xl font-semibold lg:text-2xl lg:font-bold text-brand-secondary/80 text-center">
        هنوز {title} برای نمایش وجود ندارد.
      </p>
    </div>
  );
}

export default Empty;
