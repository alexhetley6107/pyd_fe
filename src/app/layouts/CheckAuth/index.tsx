import { RouterNames } from "@/shared/constants";
import { Navigate } from "react-router-dom";

export const CheckAuth = () => {
  return <Navigate to={RouterNames.LOGIN} replace />;
};
