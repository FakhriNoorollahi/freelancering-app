function Button({ children }) {
  return (
    <button type="submit" className="btn btn--primary w-full">
      {children}
    </button>
  );
}

export default Button;
