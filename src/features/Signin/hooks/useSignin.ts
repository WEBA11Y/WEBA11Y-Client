import { useMutation } from "@tanstack/react-query";

import { SigninFormType } from "../types/signin.d";
import { signin } from "../api/signin.api";

export function useSignin() {
  return useMutation({
    mutationFn: (data: SigninFormType) => signin(data),
  });
}
