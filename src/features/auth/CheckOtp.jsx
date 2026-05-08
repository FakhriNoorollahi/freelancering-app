import AuthLayout from "./AuthLayout";
import Button from "../../ui/Button";
import { useState } from "react";
import OtpInput from "react-otp-input";
import { ArrowRightIcon, PencilIcon } from "@heroicons/react/24/solid";

function CheckOtp() {
  const [otp, setOtp] = useState("");
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center gap-y-4 h-full">
        <div className="flex flex-col gap-y-4 text-base">
          <button className="w-fit hover:bg-brand-primary/30 transition-all duration-300 rounded-full">
            <ArrowRightIcon className="size-8 p-1 cursor-pointer" />
          </button>
          <div className="flex items-center gap-x-3">
            <p>کد تایید برای شماره موبایل ارسال گردید</p>
            <button>
              <PencilIcon className="size-5 cursor-pointer text-brand-primary" />
            </button>
          </div>
          <p className="text-font-secondary">ارسال مجدد کد تایید</p>
        </div>
        <form className="w-full space-y-8">
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
          <Button>تایید</Button>
        </form>
      </div>
    </AuthLayout>
  );
}
export default CheckOtp;
