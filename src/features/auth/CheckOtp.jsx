import AuthLayout from "./AuthLayout";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { ArrowRightIcon, PencilIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import { useCheckOtp } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function CheckOtp({
  phoneNumber,
  onBack,
  expireTime,
  setExpireTime,
  onResendOtp,
}) {
  const [otp, setOtp] = useState("");
  const { isPending: isCheckingOtp, mutateAsync } = useCheckOtp();
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      expireTime > 0 && setInterval(() => setExpireTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [expireTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      toast.error("لطفا کد تایید را وارد کنید.");
      return;
    }

    try {
      const {
        message,
        user: { isActive, status, role },
      } = await mutateAsync({ otp, phoneNumber });
      toast.success(message);

      if (!isActive) return navigate("/complete-profile");
      if (status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "⏳" });
        return;
      }
      if (role === "OWNER") return navigate("/owner");
      if (role === "ADMIN") return navigate("/admin");
      if (role === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center gap-y-4 h-full">
        <div className="flex flex-col gap-y-4 text-base">
          <button
            onClick={onBack}
            className="w-fit hover:bg-brand-primary/30 transition-all duration-300 rounded-full"
          >
            <ArrowRightIcon className="size-8 p-1 cursor-pointer" />
          </button>
          <div className="flex items-center gap-x-3">
            <p>تغییر شماره موبایل: {phoneNumber}</p>
            <button onClick={onBack}>
              <PencilIcon className="size-5 cursor-pointer text-brand-primary" />
            </button>
          </div>
          <div>
            {expireTime ? (
              <button>{expireTime} ثانیه تا انقضای کد</button>
            ) : (
              <button
                onClick={onResendOtp}
                className="text-font-secondary cursor-pointer hover:text-brand-primary"
              >
                ارسال مجدد کد تایید
              </button>
            )}
          </div>
        </div>
        <form className="w-full space-y-8" onSubmit={handleSubmit}>
          <p className="font-bold">لطفا کد تایید را وارد کنید</p>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={6}
            renderSeparator={<span>-</span>}
            renderInput={(props) => <input type="number" {...props} />}
            containerStyle="flex flex-row-reverse justify-center gap-x-1"
            shouldAutoFocus={true}
            inputStyle={{
              width: "2.6rem",
              padding: "0.5rem 0.2rem",
              border: "2px solid var(--color-font-secondary)",
              borderRadius: "0.5rem",
              focus: "red",
              fontWeight: "600",
            }}
          />
          <Button isLoading={isCheckingOtp}>تایید</Button>
        </form>
      </div>
    </AuthLayout>
  );
}
export default CheckOtp;
