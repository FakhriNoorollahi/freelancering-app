function ButtonSecondary({ children, classes, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn btn--secondary ${classes}`}
    >
      {children}
    </button>
  );
}

export default ButtonSecondary;
