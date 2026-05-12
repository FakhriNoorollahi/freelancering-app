function RadioInput({ value, onChange, label, id, name, checked }) {
  return (
    <div className="flex gap-2">
      <label htmlFor={id} className="textField__label">
        {label}
      </label>
      <input
        type="radio"
        id={id}
        value={value}
        onChange={onChange}
        name={name}
        className="radio__input"
        checked={checked}
      />
    </div>
  );
}

export default RadioInput;
