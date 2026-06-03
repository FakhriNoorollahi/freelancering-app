import useAuthorize from "@/hooks/useAuthorize";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const navigate = useNavigate();
  const { isAuthenticated, isAuthorized, isProfiling, user } = useAuthorize();
  console.log(isAuthenticated, isAuthorized, user);

  useEffect(() => {
    if (!isAuthenticated && !isProfiling) {
      toast.error("وارد حساب کاربری خود شوید.");
      navigate("/auth");
    } else if (!isAuthorized && !isProfiling) {
      toast.error("شما به این صفحه دسترسی ندارید");
      navigate("/auth");
    }
  }, [navigate, isAuthenticated, isProfiling, isAuthorized]);

  if (isAuthenticated && isAuthorized) return children;
}

export default ProtectedRoute;
