function TextField({ value, onChange, label, id, type, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="phoneNumber" className="text-sm">
        {label}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="textField__input"
      />
    </div>
  );
}

export default TextField;
