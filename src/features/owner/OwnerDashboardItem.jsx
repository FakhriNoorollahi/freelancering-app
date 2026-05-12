function OwnerDashboardItem({ label, icon }) {
  return (
    <div className={`span-cols-1 rounded-xl py-5 px-3 bg-card shadow-xs`}>
      <div className="flex items-center gap-x-5">
        <div className="bg-gray-100 p-3 rounded-full">{icon}</div>
        <div className="flex flex-col justify-between gap-y-4 text-xl font-semibold">
          <span>{label}</span>
          <span>3</span>
        </div>
      </div>
    </div>
  );
}

export default OwnerDashboardItem;
