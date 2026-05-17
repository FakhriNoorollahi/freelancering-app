function TextField({
  label,
  register,
  name,
  placeholder,
  validationSchema,
  errors,
  required,
}) {
  return (
    <div className="flex flex-col gap-y-0.5">
      <div className="flex flex-col gap-y-2">
        <label htmlFor={name} className="textField__label">
          {label} {required && <span className="text-danger">*</span>}
        </label>
        <input
          {...register([name], validationSchema)}
          placeholder={placeholder}
          className="textField__input"
        />
      </div>
      <div className="h-6 flex flex-start">
        {errors && errors[name] && (
          <span className="text-danger text-xs">{errors[name]?.message}</span>
        )}
      </div>
    </div>
  );
}

export default TextField;
