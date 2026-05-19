function RadioInput({
  register,
  value,
  label,
  name,
  watch,
  validationSchema,
  id,
}) {
  return (
    <div className="flex gap-2">
      <label htmlFor={id} className="textField__label">
        {label}
      </label>
      <input
        {...register([name], validationSchema)}
        type="radio"
        id={id}
        className="radio__input"
        value={value}
        checked={watch(name) === value}
      />
    </div>
  );
}

export default RadioInput;
