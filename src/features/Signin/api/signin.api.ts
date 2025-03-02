import { httpClient } from "../../../api/http";
import { SigninFormType } from "../types/signin.d";

export const signin = async (userData: SigninFormType): Promise<void> => {
  const response = await httpClient.post("/api/v1/login", userData);
  console.log(response);
};
