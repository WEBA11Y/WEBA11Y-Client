import httpClient from "../../../api/http";
import { SignupFormType } from "../types/signup.d";

export const signup = async (userData: SignupFormType): Promise<void> => {
  const res = await httpClient.post("/api/v1/join", userData);
  console.log(res, "1");
};
