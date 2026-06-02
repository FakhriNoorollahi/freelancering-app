import {
  AdjustmentsHorizontalIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import ButtonIcon from "./ButtonIcon";
import { useLogout, useProfile } from "@/hooks/useAuth";
import USER_ROLES from "@/constants/userRolesData";

function Header({ onOpen }) {
  const { user, isPending: isProfiling } = useProfile();
  const { mutateAsync: logout } = useLogout();
  const navigate = useNavigate();

  const onHandleLogout = async () => {
    await logout();
    navigate("/auth");
  };

  return (
    <div className="col-span-12 flex items-center justify-between py-3 px-7">
      <div className="flex items-center gap-2">
        <button onClick={onOpen}>
          <AdjustmentsHorizontalIcon className="size-9 text-brand-secondary block lg:hidden" />
        </button>
        <div
          className={`flex flex-col lg:flex-row lg:items-center lg:gap-x-2 ${isProfiling && "bg-border-opacity blur-md"}`}
        >
          <div className="flex items-center text-font-primary">
            <span className="text-base lg:text-2xl font-bold pl-1">
              سلام {user?.name}
            </span>
            <span className="text-brand-secondary text-sm">
              ({USER_ROLES[user?.role]?.label})
            </span>
          </div>
          <span className="hidden lg:block">|</span>
          <span className="text-base lg:text-lg">خوش آمدید</span>
        </div>
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
