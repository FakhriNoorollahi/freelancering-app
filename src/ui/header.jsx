import { ArrowLeftEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useLogout, useProfile } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";

const userRoles = {
  ADMIN: {
    id: 1,
    label: "ادمین",
  },
  OWNER: {
    id: 2,
    label: "کارفرما",
  },
  FREELANCER: {
    id: 3,
    label: "فریلنسر",
  },
};

function Header() {
  const { user, isPending: isProfiling } = useProfile();
  const { mutateAsync: logout } = useLogout();
  const navigate = useNavigate();

  const onHandleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  return (
    <div className="col-span-12 flex items-center justify-between py-3 px-7">
      <div
        className={`flex items-center gap-x-2 ${isProfiling && "bg-border-opacity blur-md"}`}
      >
        <div className="flex items-center text-font-primary">
          <h4 className="pl-1">سلام {user?.name}</h4>
          <span className="text-brand-secondary text-sm">
            ({userRoles[user?.role]?.label})
          </span>
        </div>
        <span>|</span>
        <h6>خوش آمدید</h6>
      </div>
      <div>
        <ButtonIcon
          onClick={onHandleLogout}
          IconComponent={ArrowLeftEndOnRectangleIcon}
          iconClasses="size-8 group-hover:text-danger"
          buttonClasses="hover:bg-danger/5 hover:border-danger/5"
        />
      </div>
    </div>
  );
}

export default Header;
