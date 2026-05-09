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
      <p className="text-center font-black text-2xl lg:text-4xl">
        تایید کد یکبار مصرف
      </p>
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
        <p className="md:font-bold">لطفا کد تایید را وارد کنید</p>
      </div>
      <form className="w-full space-y-8" onSubmit={handleSubmit}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderSeparator={<span>-</span>}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex flex-row-reverse gap-x-2"
          inputStyle="flex-1 border-2 border-solid border-font-secondary focus:border-brand-primary rounded-lg font-bold"
          shouldAutoFocus={true}
        />
        <Button isLoading={isCheckingOtp}>تایید</Button>
      </form>
    </AuthLayout>
  );
}
export default CheckOtp;
