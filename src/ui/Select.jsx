function Select({ options, onChange, label }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="textField__label">{label}</label>
      <select className="textField__input" onChange={onChange}>
        {options.map((o) => (
          <option key={o.id} value={o.value}>
            {o.title}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Select;
