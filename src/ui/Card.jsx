function Card({ IconComponent, label, data, cardClasses }) {
  return (
    <div
      className={`border border-border-opacity rounded-xl bg-white col-span-3 md:col-span-2 lg:col-span-1 ${cardClasses}`}
    >
      <div className="flex items-center gap-4 p-6">
        <div className="flex items-center justify-center text-white p-2 rounded-xl bg-brand-secondary">
          <IconComponent className="size-7" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-brand-secondary mb-2">{label}</span>
          <span className="text-font-primary font-bold">{data}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
