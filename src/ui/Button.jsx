function Button({ children, classes, onClick }) {
  return (
    <button
      onClick={onClick}
      type="submit"
      className={`btn btn--primary ${classes}`}
    >
      {children}
    </button>
  );
}

export default Button;
