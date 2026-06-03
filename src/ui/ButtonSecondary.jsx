function ButtonSecondary({ children, classes, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn btn--secondary ${classes}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
