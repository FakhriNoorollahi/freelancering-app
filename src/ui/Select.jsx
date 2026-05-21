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
        <label className="textField__label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <select
          className="textField__input"
          {...register([name], validationSchema)}
        >
          <option value="" disabled selected hidden>
            یک گزینه را انتخاب کنید
          </option>
          {options.map((o) => (
            <option key={o.id} value={o.value}>
              {o.title}
            </option>
          ))}
        </select>
      </div>
      {errors && errors[name] && (
        <span className="text-danger text-xs">{errors[name]?.message}</span>
      )}
    </div>
  );
}

export default Select;
