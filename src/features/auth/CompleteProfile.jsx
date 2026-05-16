import { useState } from "react";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AuthLayout from "./AuthLayout";
import RadioInput from "../../ui/RadioInput";
import { useCompleteProfile } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sppiner from "../../ui/Sppiner";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();
  const { isPending: isCompleteingProfile, mutateAsync } = useCompleteProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {
        message,
        user: { status, role: userRole },
      } = await mutateAsync({ name, email, role: role });
      toast.success(message);

      if (status !== 2) {
        navigate("/");
        toast("پروفایل شما در انتظار تایید است", { icon: "⏳" });
        return;
      }
      if (userRole === "OWNER") return navigate("/owner");
      if (userRole === "ADMIN") return navigate("/admin");
      if (userRole === "FREELANCER") return navigate("/freelancer");
    } catch (error) {
      toast.error(error?.response?.data?.message);
    }
  };

  return (
    <AuthLayout>
      <p className="text-center font-black text-2xl mb-10">ثبت نام</p>
      <form className="w-full space-y-10" onSubmit={handleSubmit}>
        <div className="space-y-7">
          <TextField
            value={name}
            onChange={(e) => setName(e.target.value)}
            id="name"
            type="text"
            placeholder="نمونه: حنا نوری"
            label="نام و نام خانوادگی خود را وارد کنید"
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id="email"
            type="email"
            placeholder="نمونه: hana.noori@gmail.com"
            label="ایمیل خود را وارد کنید"
          />
        </div>
        <div className="flex justify-center gap-x-4">
          <RadioInput
            value="FREELANCER"
            label="فریلنسر"
            onChange={(e) => setRole(e.target.value)}
            id="FREELANCER"
            name="role"
            checked={role === "FREELANCER"}
          />
          <RadioInput
            value="OWNER"
            id="OWNER"
            name="role"
            onChange={(e) => setRole(e.target.value)}
            label="کارفرما"
            checked={role === "OWNER"}
          />
        </div>
        {isCompleteingProfile ? (
          <Sppiner />
        ) : (
          <Button classes="w-full">تایید</Button>
        )}
      </form>
    </AuthLayout>
  );
}
export default CompleteProfile;
