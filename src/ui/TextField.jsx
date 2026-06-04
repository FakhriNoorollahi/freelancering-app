function TextField({
  label,
  register,
  name,
  placeholder,
  validationSchema,
  errors,
  required,
  type = "text",
}) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <div className="flex flex-col gap-y-2">
        <label htmlFor={name} className="textField__label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <input
          {...register(name, validationSchema)}
          placeholder={placeholder}
          className="textField__input"
          type={type}
        />
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
