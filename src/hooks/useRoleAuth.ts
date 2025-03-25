import useAuthStore from "../store/useAuthStore";
import { RoleError } from "../features/Signup/utils/error";

export const useRoleAuth = () => {
  const { role } = useAuthStore();

  if (role === "guest") {
    throw new RoleError();
  }
};
