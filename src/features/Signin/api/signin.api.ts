import { httpClient } from "../../../api/http";
import { SigninFormType } from "../types/signin.d";

export const signin = async (userData: SigninFormType): Promise<void> => {
  await httpClient.post("/users/login", userData);
};
