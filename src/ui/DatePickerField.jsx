import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

function DatePickerField({ label, date, setDate }) {
  return (
    <div className="flex flex-col gap-2 mb-6">
      <span className="textField__label">{label}</span>
      <DatePicker.default
        containerClassName="w-full"
        inputClass="textField__input"
        value={date}
        onChange={(date) => setDate(date)}
        format="YYYY/MM/DD"
        calendar={persian}
        locale={persian_fa}
        calendarPosition="bottom_left"
        placeholder="نمونه : ۱۴۰۵/۰۲/۲۸"
      />
    </div>
  );
}

export default DatePickerField;
