import AuthLayout from "./AuthLayout";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { PencilIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import { useCheckOtp } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Sppiner from "../../ui/Sppiner";
import { timeFormat } from "../../utils/timeFormat";

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
            <PencilIcon className="size-3" />
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
