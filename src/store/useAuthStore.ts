import { create } from "zustand";

type AuthState = {
  isLoggedIn: boolean;
  login: (token: string) => void;
  logout: () => void;
};

const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: !!localStorage.getItem("accessToken"),
  login: (token) => {
    localStorage.setItem("accessToken", token);
  },
  logout: () => {
    localStorage.removeItem("accessToken");
    set({ isLoggedIn: false });
  },
}));

export default useAuthStore;
