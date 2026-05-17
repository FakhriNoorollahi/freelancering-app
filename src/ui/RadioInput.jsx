function RadioInput({ register, value, label, name, validationSchema }) {
  console.log(name);

  return (
    <div className="flex gap-2">
      <label htmlFor={name} className="textField__label">
        {label}
      </label>
      <input
        {...register([name], validationSchema)}
        type="radio"
        id={name}
        className="radio__input"
        value={value}
      />
    </div>
  );
}

export default RadioInput;
