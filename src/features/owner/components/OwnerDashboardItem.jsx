function OwnerDashboardItem({ label, icon }) {
  return (
    <div className="span-cols-1 rounded-xl py-5 px-3 shadow-sm bg-white border border-border/35">
      <div className="flex items-center gap-x-5">
        <div className="p-3 rounded-full">{icon}</div>
        <div className="flex flex-col justify-between gap-y-4 text-lg font-semibold text-font-primary">
          <span>{label}</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardItem;
