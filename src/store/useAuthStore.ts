import { create } from "zustand";

type UserRole = "guest" | "user";

type AuthState = {
  isLoggedIn: boolean;
  login: (token: string, role: UserRole) => void;
  logout: () => void;
  role: UserRole;
};

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("accessToken"),
  role: (localStorage.getItem("userRole") as UserRole) || "guest",
  login: (token, role) => {
    localStorage.setItem("accessToken", token);
    localStorage.setItem("userRole", role);
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");

    set({ isLoggedIn: false, role: "guest" });
  },
}));

export default useAuthStore;
