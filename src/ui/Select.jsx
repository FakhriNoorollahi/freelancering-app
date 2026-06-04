function Select({
  options,
  label,
  register,
  name,
  validationSchema,
  errors,
  required,
}) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <div className="flex flex-col gap-2">
        <label htmlFor={name} className="textField__label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <select
          id={name}
          className="textField__input text-sm!"
          {...register(name, validationSchema)}
          defaultValue=""
        >
          <option value="" disabled>
            یک گزینه را انتخاب کنید
          </option>
          {options.map((o) => (
            <option key={o.id} value={o.value}>
              {o.title}
            </option>
          ))}
        </select>
      </div>
      <div className="h-6 text-start">
        {errors && errors[name] && (
          <span className="text-danger text-xs">{errors[name]?.message}</span>
        )}
      </div>
    </div>
  );
}

export default Select;
