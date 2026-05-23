import RadioInput from "./RadioInput";

function RadioInputGroup({ register, watch, errors, configs }) {
  const { validationSchema = {}, name, options } = configs;
  return (
    <>
      <div className="flex justify-center gap-x-4">
        {options.map((o) => (
          <RadioInput
            key={o.value}
            value={o.value}
            label={o.label}
            id={o.value}
            name={name}
            register={register}
            errors={errors}
            validationSchema={validationSchema}
            watch={watch}
          />
        ))}
      </div>
      <div className="h-6">
        {errors && errors["role"] && (
          <span className="text-danger text-xs">{errors["role"]?.message}</span>
        )}
      </div>
    </>
  );
}

export default RadioInputGroup;
