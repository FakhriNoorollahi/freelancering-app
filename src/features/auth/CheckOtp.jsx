import AuthLayout from "./AuthLayout";
import Button from "../../ui/Button";
import { useEffect, useState } from "react";
import OtpInput from "react-otp-input";
import { ArrowRightIcon, PencilIcon } from "@heroicons/react/24/solid";
import toast from "react-hot-toast";
import { useCheckOtp } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function CheckOtp({ phoneNumber, setStep, expireTime, setExpireTime }) {
  const [otp, setOtp] = useState("");
  const { isPending, mutateAsync } = useCheckOtp();
  const navigate = useNavigate();

  useEffect(() => {
    let intervalId = 0;
    if (expireTime > 0) {
      intervalId = setInterval(() => {
        setExpireTime((t) => t - 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
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

      if (isActive) {
        if (status === 2) {
          if (role === "ADMIN") {
            navigate("/admin");
          } else if (role === "FREELANCER") {
            navigate("/freelancer");
          } else {
            navigate("/owner");
          }
        }
      } else {
        navigate("/complete-profile");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center gap-y-4 h-full">
        <div className="flex flex-col gap-y-4 text-base">
          <button
            onClick={() => setStep(1)}
            className="w-fit hover:bg-brand-primary/30 transition-all duration-300 rounded-full"
          >
            <ArrowRightIcon className="size-8 p-1 cursor-pointer" />
          </button>
          <div className="flex items-center gap-x-3">
            <p>کد تایید برای شماره موبایل {phoneNumber} ارسال گردید</p>
            <button onClick={() => setStep(1)}>
              <PencilIcon className="size-5 cursor-pointer text-brand-primary" />
            </button>
          </div>
          <div>
            {expireTime ? (
              <button>{expireTime} ثانیه تا انقضای کد</button>
            ) : (
              <button className="text-font-secondary cursor-pointer hover:text-brand-primary">
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
          <Button isLoading={isPending}>تایید</Button>
        </form>
      </div>
    </AuthLayout>
  );
}
export default CheckOtp;
