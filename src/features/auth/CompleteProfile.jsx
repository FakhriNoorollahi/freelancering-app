import TextField from "../../ui/TextField";
import Button from "../../ui/Button";
import AuthLayout from "./AuthLayout";
import RadioInput from "../../ui/RadioInput";
import { useCompleteProfile } from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Sppiner from "../../ui/Sppiner";
import { useForm } from "react-hook-form";

function CompleteProfile() {
  const {
    handleSubmit,
    register,
    watch,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { isPending: isCompleteingProfile, mutateAsync } = useCompleteProfile();

  const onHandleSubmit = async (data) => {
    try {
      const {
        message,
        user: { status, role: userRole },
      } = await mutateAsync(data);
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
        <>
          <div className="flex justify-center gap-x-4">
            <RadioInput
              value="FREELANCER"
              label="فریلنسر"
              id="FREELANCER"
              name="role"
              register={register}
              errors={errors}
              validationSchema={{
                required: "انتخاب کاربر ضروری است",
              }}
              watch={watch}
            />
            <RadioInput
              register={register}
              value="OWNER"
              id="OWNER"
              name="role"
              label="کارفرما"
              errors={errors}
              validationSchema={{
                required: "انتخاب کاربر ضروری است",
              }}
              watch={watch}
            />
          </div>
          <div className="h-6">
            {errors && errors["role"] && (
              <span className="text-danger text-xs">
                {errors["role"]?.message}
              </span>
            )}
          </div>
        </>
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
