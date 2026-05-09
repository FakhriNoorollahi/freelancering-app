import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AuthLayout from "./AuthLayout";

function Signin({ phoneNumber, onChange, sendOtpHandler, isSendingOtp }) {
  return (
    <AuthLayout>
      <div className="space-y-5 text-center mb-10">
        <p className="font-black text-2xl lg:text-4xl">سلام</p>
        <p className="font-black text-2xl lg:text-4xl">خوش آمدید</p>
      </div>
      <form className="w-full space-y-7" onSubmit={sendOtpHandler}>
        <TextField
          value={phoneNumber}
          onChange={onChange}
          type="text"
          id="phoneNumber"
          placeholder="شماره موبایل"
          label="لطفا شماره موبایل خود را وارد کنید"
        />
        <Button isLoading={isSendingOtp}>ارسال کد تایید</Button>
      </form>
    </AuthLayout>
  );
}
export default Signin;
