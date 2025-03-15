import httpClient from "../../../api/http";
import useAuthStore from "../../../store/useAuthStore";
import { SigninFormType } from "../types/signin.d";

export const signin = async (userData: SigninFormType): Promise<void> => {
  const { login } = useAuthStore.getState();

  const response = await httpClient.post("/api/v1/login", userData);
  login(response.data.accessToken);
};
