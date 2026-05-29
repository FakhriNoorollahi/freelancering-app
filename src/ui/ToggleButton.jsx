function ToggleButton({ checked, onChange }) {
  return (
    <div className="toggle">
      <input type="checkbox" checked={checked} onChange={onChange} />
      <label></label>
    </div>
  );
}

export default ToggleButton;
