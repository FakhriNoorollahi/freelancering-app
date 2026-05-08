function RadioInput({ value, onChange, label, id, name }) {
  return (
    <div className="flex gap-2">
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <input
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className="radio__input"
      />
    </div>
  );
}

export default RadioInput;
