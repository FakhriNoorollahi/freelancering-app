function Button({ children, classes }) {
  return (
    <button type="submit" className={`btn btn--primary ${classes}`}>
      {children}
    </button>
  );
}

export default Button;
