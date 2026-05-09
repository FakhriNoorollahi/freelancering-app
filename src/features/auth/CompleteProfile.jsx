import { useState } from "react";
import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AuthLayout from "./AuthLayout";
import RadioInput from "../../ui/RadioInput";
import { useCompleteProfile } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CompleteProfile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const navigate = useNavigate();

  const { isPending, mutateAsync } = useCompleteProfile();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !role) return;

    try {
      const {
        message,
        user: { status, role },
      } = await mutateAsync({ name, email, role: "FREELANCER" });
      toast.success(message);

      if (status === 1) {
        toast.error("اطلاعات شما هنوز تایید نشده است.");
        navigate("/auth");
      } else if (status === 2) {
        if (role === "ADMIN") {
          navigate("/admin");
        } else if (role === "FREELANCER") {
          navigate("/freelancer");
        } else {
          navigate("/owner");
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <AuthLayout>
      <h2 className="py-14 text-center">ثبت نام</h2>
      <form className="w-full space-y-10" onSubmit={handleSubmit}>
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
            value="FREELANCER"
            onChange={(e) => setRole(e.target.value)}
            label="فریلنسر"
            id="FREELANCER"
            name="role"
            checked={role === "FREELANCER"}
          />
          <RadioInput
            value="OWNER"
            onChange={(e) => setRole(e.target.value)}
            label="کارفرما"
            id="OWNER"
            name="role"
            checked={role === "OWNER"}
          />
        </div>
        <Button isLoading={isPending}>تایید</Button>
      </form>
    </AuthLayout>
  );
}
export default CompleteProfile;
