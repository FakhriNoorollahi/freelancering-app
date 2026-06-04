function TextField({
  label,
  register,
  name,
  placeholder,
  validationSchema,
  errors,
  required,
  type = "text",
  icon = "",
}) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <div className="flex flex-col gap-y-2">
        <label htmlFor={name} className="textField__label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <div className="textField__input flex items-center">
          <input
            {...register(name, validationSchema)}
            placeholder={placeholder}
            className="flex-1"
            type={type}
          />
          <div className="text-xs font-bold">{icon}</div>
        </div>
      </div>
      <div className="h-6 text-start">
        {errors && errors[name] && (
          <span className="text-danger text-xs">{errors[name]?.message}</span>
        )}
      </div>
    </div>
  );
}

export default TextField;
