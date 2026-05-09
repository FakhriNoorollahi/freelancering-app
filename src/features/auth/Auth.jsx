import { useState } from "react";
import Signin from "./Signin";
import CheckOtp from "./CheckOtp";
import { useGetOtp } from "../../hooks/useAuth";
import toast from "react-hot-toast";

function Auth() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [expireTime, setExpireTime] = useState(0);
  const { isPending: isSendingOtp, mutateAsync } = useGetOtp();

  const sendOtpHandler = async (e) => {
    e.preventDefault();
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
          phoneNumber={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
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
          phoneNumber={phoneNumber}
        />
      );
    }
  };

  return render();
}
export default Auth;
