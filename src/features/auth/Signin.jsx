import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import Sppiner from "../../ui/Sppiner";
import AuthLayout from "./AuthLayout";

function Signin({ phoneNumber, onChange, sendOtpHandler, isSendingOtp }) {
  return (
    <AuthLayout>
      <div className="mb-8 text-center space-y-3">
        <p className="font-black text-lg ">به فریلنسری خوش آمدید.</p>
        <p className="text-sm font-medium opacity-70 max-w-96">
          برای استفاده از خدمات فریلنسری نیاز است ابتدا به حساب کاربری خود وارد
          شوید.
        </p>
      </div>
      <form className="w-full space-y-7" onSubmit={sendOtpHandler}>
        <TextField
          value={phoneNumber}
          onChange={onChange}
          type="text"
          id="phoneNumber"
          placeholder="نمونه : 09123456789"
          label="شماره همراه"
        />
        {isSendingOtp ? <Sppiner /> : <Button>ارسال کد تایید</Button>}
      </form>
    </AuthLayout>
  );
}
export default Signin;
