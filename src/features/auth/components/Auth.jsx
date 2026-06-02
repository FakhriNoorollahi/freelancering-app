import { useState } from "react";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import Signin from "./Signin";
import CheckOtp from "./CheckOtp";
import { useGetOtp } from "@/hooks/useAuth";

function Auth() {
  const [step, setStep] = useState(1);
  const [expireTime, setExpireTime] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const { isPending: isSendingOtp, mutateAsync } = useGetOtp();

  const sendOtpHandler = async (data) => {
    const { phoneNumber } = data;
    try {
      const { expiresIn, message } = await mutateAsync({ phoneNumber });
      toast.success(message, { duration: 10000 });
      setExpireTime(expiresIn / 1000);
      setStep(2);
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  const render = () => {
    if (step === 1) {
      return (
        <Signin
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          isSendingOtp={isSendingOtp}
          sendOtpHandler={sendOtpHandler}
        />
      );
    } else {
      return (
        <CheckOtp
          expireTime={expireTime}
          setExpireTime={setExpireTime}
          onBack={() => setStep((s) => s - 1)}
          onResendOtp={sendOtpHandler}
          phoneNumber={getValues("phoneNumber")}
        />
      );
    }
  };

  return render();
}
export default Auth;
