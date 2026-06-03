import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import TextField from "@/ui/TextField";
import RadioInputGroup from "@/ui/RadioInputGroup";
import Sppiner from "@/ui/Sppiner";
import Button from "@/ui/Button";
import AuthLayout from "./AuthLayout";
import { useCompleteProfile } from "../hooks/useCompleteProfile";
import toast from "react-hot-toast";

function CompleteProfile() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { isCompletingProfile, completeProfile } = useCompleteProfile();

  const onHandleSubmit = async (data) => {
    await completeProfile(data, {
      onSuccess: (user) => {
        const { status, role: userRole } = user;
        if (status !== 2) {
          navigate("/");
          toast("پروفایل شما در انتظار تایید است", { icon: "⏳" });
          return;
        }
        if (userRole === "OWNER") return navigate("/owner");
        if (userRole === "ADMIN") return navigate("/admin");
        if (userRole === "FREELANCER") return navigate("/freelancer");
      },
    });
  };

  return (
    <AuthLayout>
      <p className="text-center font-black text-2xl mb-10">ثبت نام</p>
      <form className="w-full" onSubmit={handleSubmit(onHandleSubmit)}>
        <div className="space-y-2">
          <TextField
            register={register}
            name="name"
            placeholder="نمونه: حنا نوری"
            label="نام و نام خانوادگی خود را وارد کنید"
            required
            errors={errors}
            validationSchema={{
              required: "نام و نام خانوادگی ضروری است",
              minLength: {
                value: 6,
                message: "طول نام و نام خانوادگی نامعتبر است",
              },
            }}
          />
          <TextField
            register={register}
            name="email"
            placeholder="نمونه: hana.noori@gmail.com"
            label="ایمیل خود را وارد کنید"
            required
            errors={errors}
            validationSchema={{
              required: "ایمیل ضروری است",
            }}
          />
        </div>
        <RadioInputGroup
          register={register}
          errors={errors}
          watch={watch}
          configs={{
            name: "role",
            validationSchema: { required: "انتخاب نقش ضروری است" },
            options: [
              { value: "FREELANCER", label: "فریلنسر" },
              { label: "کارفرما", value: "OWNER" },
            ],
          }}
        />
        {isCompletingProfile ? (
          <Sppiner />
        ) : (
          <Button classes="w-full">تایید</Button>
        )}
      </form>
    </AuthLayout>
  );
}
export default CompleteProfile;
