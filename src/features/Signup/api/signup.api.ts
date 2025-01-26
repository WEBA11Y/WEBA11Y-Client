import { httpClient } from "../../../api/http";
import { SignupFormType } from "../types/signup.d";

export const signup = async (userData: SignupFormType): Promise<void> => {
  await httpClient.post<SignupFormType>("/users/register", userData);
};
