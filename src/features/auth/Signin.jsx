import { useState } from "react";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AuthLayout from "./AuthLayout";

function Signin() {
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <AuthLayout>
      <div className="py-16 space-y-5 text-center">
        <h2>سلام</h2>
        <h2>خوش آمدید</h2>
      </div>
      <form className="w-full space-y-7">
        <TextField
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          type="text"
          id="phoneNumber"
          placeholder="شماره موبایل"
          label="لطفا شماره موبایل خود را وارد کنید"
        />
        <Button>ارسال کد تایید</Button>
      </form>
    </AuthLayout>
  );
}
export default Signin;
