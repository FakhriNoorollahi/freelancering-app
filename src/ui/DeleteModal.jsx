import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";

function DeleteModal({ onClose, onClick, description, isLoading }) {
  return (
    <>
      <p className="text-start mb-8 text-sm font-medium">{description}</p>
      {!isLoading && (
        <div className="flex items-center justify-between gap-x-3">
          <Button classes="w-full" onClick={onClick}>
            حذف
          </Button>
          <ButtonSecondary classes="w-full" onClick={onClose}>
            لغو
          </ButtonSecondary>
        </div>
      )}
    </>
  );
}
export default DeleteModal;
