import { useState } from "react";
import Signin from "./Signin";
import CheckOtp from "./CheckOtp";
import { useGetOtp } from "../../hooks/useAuth";
import toast from "react-hot-toast";

function Auth() {
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [expireTime, setExpireTime] = useState(0);
  const { isPending, mutateAsync } = useGetOtp();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { expiresIn, message } = await mutateAsync({ phoneNumber });
      toast.success(message, { duration: 10000 });
      setExpireTime(expiresIn / 1000);
      setStep(2);
    } catch (error) {
      console.log(error);
    }
  };

  const render = () => {
    if (step === 1) {
      return (
        <Signin
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          isPending={isPending}
          handleSubmit={handleSubmit}
        />
      );
    } else {
      return (
        <CheckOtp
          expireTime={expireTime}
          setExpireTime={setExpireTime}
          phoneNumber={phoneNumber}
          setStep={setStep}
        />
      );
    }
  };
  return render();
}
export default Auth;
