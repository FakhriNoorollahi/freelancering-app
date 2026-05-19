function Button({ children, classes, onClick, disabled = false }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn btn--primary ${classes}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;
