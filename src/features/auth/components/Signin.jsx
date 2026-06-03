import TextField from "@/ui/TextField";
import AuthLayout from "./AuthLayout";
import Sppiner from "@/ui/Sppiner";
import Button from "@/ui/Button";

function Signin({
  sendOtpHandler,
  isGetingOtp,
  handleSubmit,
  register,
  errors,
}) {
  return (
    <AuthLayout>
      <div className="mb-8 text-center space-y-3">
        <p className="font-black text-lg ">به فریلنستو خوش آمدید.</p>
        <p className="text-sm font-medium opacity-70 max-w-96">
          برای استفاده از خدمات فریلنستو نیاز است ابتدا به حساب کاربری خود وارد
          شوید.
        </p>
      </div>
      <form
        className="w-full space-y-4"
        onSubmit={handleSubmit(sendOtpHandler)}
      >
        <TextField
          register={register}
          name="phoneNumber"
          placeholder="نمونه : 09123456789"
          label="شماره همراه"
          validationSchema={{
            required: "شماره تلفن ضروری است",
          }}
          required
          errors={errors}
        />
        {isGetingOtp ? (
          <Sppiner />
        ) : (
          <Button classes="w-full">ارسال کد تایید</Button>
        )}
      </form>
    </AuthLayout>
  );
}
export default Signin;
