function ButtonIcon({ onClick, IconComponent, buttonClasses, iconClasses }) {
  return (
    <button
      onClick={onClick}
      className={`border border-solid border-border-opacity p-1 rounded-xl cursor-pointer group ${buttonClasses}`}
    >
      <IconComponent className={`text-brand-secondary  ${iconClasses}`} />
    </button>
  );
}

export default ButtonIcon;
