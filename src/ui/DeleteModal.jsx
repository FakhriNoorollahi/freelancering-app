import Button from "./Button";
import ButtonSecondary from "./ButtonSecondary";

function DeleteModal({ onClose, onConfirm, title, disabled }) {
  return (
    <>
      <p className="text-start mb-8 text-sm font-medium">
        آیا از حذف {title} مطمئن هستید؟
      </p>
      <div className="flex items-center justify-between gap-x-3">
        <Button classes="w-full" onClick={onConfirm} disabled={disabled}>
          حذف
        </Button>
        <ButtonSecondary classes="w-full" onClick={onClose} disabled={disabled}>
          لغو
        </ButtonSecondary>
      </div>
    </>
  );
}
export default DeleteModal;
