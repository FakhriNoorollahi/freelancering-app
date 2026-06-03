function ButtonSecondary({ children, classes, onClick, disabled }) {
  console.log(disabled);

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
