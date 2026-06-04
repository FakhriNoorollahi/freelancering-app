import { useLocation } from "react-router-dom";
import { useProfile } from "./useAuth";

function useAuthorize() {
  const { isProfiling, user } = useProfile();
  const { pathname } = useLocation();

  let isAuthorized = false;
  let isAuthenticated = false;

  if (user) isAuthenticated = true;

  const ROLES = {
    admin: "ADMIN",
    freelancer: "FREELANCER",
    owner: "OWNER",
  };

  const currentRoute = pathname.split("/")[1];

  if (Object.keys(ROLES).includes(currentRoute)) {
    if (!!user && user.role === ROLES[currentRoute]) {
      isAuthorized = true;
    }
  }

  return { isAuthenticated, isAuthorized, user, isProfiling };
}

export default useAuthorize;
