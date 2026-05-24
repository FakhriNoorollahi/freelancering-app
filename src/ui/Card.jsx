function Card({ IconComponent, label, cardClasses }) {
  return (
    <div
      className={`border border-border-opacity rounded-xl bg-white ${cardClasses}`}
    >
      <div className="flex items-center gap-4 p-6">
        <div className="flex items-center justify-center text-white p-2 rounded-xl bg-brand-secondary">
          <IconComponent className="size-7" />
        </div>
        <div className="flex flex-col">
          <span className="text-sm text-brand-secondary mb-2">{label}</span>
          <span className="text-font-primary font-bold">3</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
