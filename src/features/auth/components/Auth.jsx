import { useState } from "react";
import { useForm } from "react-hook-form";
import Signin from "./Signin";
import CheckOtp from "./CheckOtp";
import useGetOtp from "../hooks/useGetOtp";

function Auth() {
  const [step, setStep] = useState(1);
  const [expireTime, setExpireTime] = useState(0);
  const {
    handleSubmit,
    register,
    formState: { errors },
    getValues,
  } = useForm();
  const { isGetingOtp, getOtp } = useGetOtp();

  const sendOtpHandler = async (data) => {
    const { phoneNumber } = data;
    await getOtp(
      { phoneNumber },
      {
        onSuccess: ({ expiresIn }) => {
          setExpireTime(expiresIn / 1000);
          setStep(2);
        },
      },
    );
  };

  const render = () => {
    if (step === 1) {
      return (
        <Signin
          register={register}
          errors={errors}
          handleSubmit={handleSubmit}
          isGetingOtp={isGetingOtp}
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
