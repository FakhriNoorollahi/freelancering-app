import Sppiner from "./Sppiner";

function Button({ children, isLoading = false, onClick = null }) {
  return (
    <button
      onClick={onClick}
      disabled={isLoading}
      type="submit"
      className="btn btn--primary"
    >
      {isLoading ? <Sppiner cssClass="size-4" /> : children}
    </button>
  );
}

export default Button;
