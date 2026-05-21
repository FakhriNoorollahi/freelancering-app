import { FolderOpenIcon } from "@heroicons/react/24/outline";

function Empty({ title }) {
  return (
    <div className="flex flex-col items-center justify-center gap-y-4">
      <FolderOpenIcon className="size-25 text-brand-secondary/80" />
      <h3 className="text-brand-secondary/80">
        هنوز {title} برای نمایش وجود ندارد.
      </h3>
    </div>
  );
}

export default Empty;
