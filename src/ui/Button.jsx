import Sppiner from "./Sppiner";

function Button({ children, isLoading = false }) {
  return (
    <button
      disabled={isLoading}
      type="submit"
      className="btn btn--primary w-full"
    >
      {isLoading ? <Sppiner cssClass="size-4" /> : children}
    </button>
  );
}

export default Button;
