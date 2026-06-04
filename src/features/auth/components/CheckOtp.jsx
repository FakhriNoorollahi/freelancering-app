import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import OtpInput from "react-otp-input";
import { PencilIcon } from "@heroicons/react/24/solid";
import AuthLayout from "./AuthLayout";
import Sppiner from "@/ui/Sppiner";
import Button from "@/ui/Button";
import { timeFormat } from "@/utils/timeFormat";
import { useCheckOtp } from "../hooks/useCheckOtp";
import { showCustomToast } from "@/utils/showCustomToast";

function CheckOtp({
  phoneNumber,
  onBack,
  expireTime,
  setExpireTime,
  onResendOtp,
}) {
  const [otp, setOtp] = useState("");
  const { checkOtp, isCheckingOtp } = useCheckOtp();
  const navigate = useNavigate();

  useEffect(() => {
    const timer =
      expireTime > 0 && setInterval(() => setExpireTime((t) => t - 1), 1000);

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [expireTime, setExpireTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!otp) {
      showCustomToast.error("لطفا کد تایید را وارد کنید.");
      return;
    }

    await checkOtp(
      { otp, phoneNumber },
      {
        onSuccess: ({ user }) => {
          const { isActive, status, role } = user;
          if (!isActive) return navigate("/complete-profile");
          if (status !== 2) {
            if (status === 0) {
              showCustomToast.error("پروفایل شما مورد تایید قرار نگرفته است");
            }
            if (status === 1) {
              showCustomToast.info("پروفایل شما در انتظار تایید است");
            }
            navigate("/");
            return;
          }

          if (role === "OWNER") return navigate("/owner");
          if (role === "ADMIN") return navigate("/admin");
          if (role === "FREELANCER") return navigate("/freelancer");
        },
      },
    );
  };

  return (
    <AuthLayout>
      <div className="space-y-4 mb-8">
        <div className="text-center space-y-3">
          <p className="font-black text-lg">کد تایید</p>
          <p className="font-medium opacity-70">
            کد تایید ارسال شده را وارد کنید.
          </p>
        </div>
        <div className="flex justify-between items-center gap-x-2 text-sm font-semibold px-7">
          <p>{phoneNumber}</p>
          <button
            className="flex items-center gap-x-1 cursor-pointer hover:text-success"
            onClick={onBack}
          >
            <PencilIcon className="size-4" />
            اصلاح شماره
          </button>
        </div>
      </div>
      <form className="w-full space-y-5 mb-6" onSubmit={handleSubmit}>
        <OtpInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input type="number" {...props} />}
          containerStyle="flex justify-center flex-row-reverse gap-x-2"
          inputStyle="flex-1 border-1 border-border font-bold rounded-sm py-1 bg-white hover:border-brand-primary focus:border-brand-primary"
          shouldAutoFocus={true}
        />
        {isCheckingOtp ? <Sppiner /> : <Button classes="w-full">تایید</Button>}
      </form>
      <div className="flex justify-between items-center text-sm font-bold">
        {!!expireTime && <p>{timeFormat(expireTime)}</p>}
        <button
          onClick={onResendOtp}
          disabled={expireTime}
          className="cursor-pointer hover:text-success mr-auto disabled:text-font-primary/20"
        >
          ارسال مجدد
        </button>
      </div>
    </AuthLayout>
  );
}
export default CheckOtp;
