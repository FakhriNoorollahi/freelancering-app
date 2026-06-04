import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import { Controller } from "react-hook-form";

function DatePickerField({ control, name, label, required, validationSchema }) {
  return (
    <div className="flex flex-col gap-y-2">
      <label htmlFor={name} className="textField__label">
        {label} {required && <span className="text-danger">*</span>}
      </label>
      <Controller
        control={control}
        name={name}
        rules={validationSchema}
        render={({ field, formState: { errors } }) => (
          <div className="flex flex-col gap-y-0.5">
            <DatePicker.default
              id={name}
              format="YYYY/MM/DD"
              placeholder="نمونه : ۱۴۰۵/۰۲/۲۸"
              containerClassName="w-full"
              inputClass="textField__input"
              calendar={persian}
              locale={persian_fa}
              value={field.value}
              onChange={(date) => {
                field.onChange(date?.toDate?.() ?? date);
              }}
            />
            <div className="h-6 text-start">
              {errors && errors[name] && (
                <span className="text-danger text-xs">
                  {errors[name]?.message}
                </span>
              )}
            </div>
          </div>
        )}
      />
    </div>
  );
}

export default DatePickerField;
