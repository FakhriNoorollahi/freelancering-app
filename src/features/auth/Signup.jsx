import { useState } from "react";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AuthLayout from "./AuthLayout";
import RadioInput from "../../ui/RadioInput";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  return (
    <AuthLayout>
      <h2 className="py-14 text-center">ثبت نام</h2>
      <form className="w-full space-y-10">
        <div className="space-y-7">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="NAME"
            type="text"
            placeholder="نام و نام خانوادگی"
            label="لطفا نام و نام خانوادگی خود را وارد کنید"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="EMAIL"
            type="email"
            placeholder="ایمیل"
            label="لطفا ایمیل خود را وارد کنید"
          />
        </div>
        <div className="flex justify-center gap-x-4">
          <RadioInput
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="فریلنسر"
            id="FREELANCER"
            name="role"
          />
          <RadioInput
            value={role}
            onChange={(e) => setRole(e.target.value)}
            label="کارفرما"
            id="OWNER"
            name="role"
          />
        </div>
        <Button>تایید</Button>
      </form>
    </AuthLayout>
  );
}
export default Signup;
