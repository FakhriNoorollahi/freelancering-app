function ButtonSecondary({ children, classes, onClick, disabled }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn btn--secondary hover:border-danger! hover:text-danger! ${classes}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
