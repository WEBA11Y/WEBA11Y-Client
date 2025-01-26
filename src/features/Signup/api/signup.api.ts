import { httpClient } from "../../../api/http";
import { SignupFormType } from "../types/signup.d";

export const signup = async (userData: SignupFormType): Promise<void> => {
  await httpClient.post("/users/register", userData);
};
