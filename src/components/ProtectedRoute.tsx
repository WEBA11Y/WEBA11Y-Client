import { Navigate } from "react-router-dom";

import useAuthStore from "../store/useAuthStore";
import { PATH } from "../constants/path";

type Props = {
  children: React.ReactNode;
  allowedRoles: string[];
};

export default function ProtectedRoute({ children, allowedRoles }: Props) {
  const { role } = useAuthStore();
  return allowedRoles.includes(role) ? (
    <>{children}</>
  ) : (
    <Navigate to={PATH.HOME} />
  );
}
