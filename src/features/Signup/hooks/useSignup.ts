import { useMutation } from "@tanstack/react-query";

import { SignupFormType } from "../types/signup.d";
import { signup } from "../api/signup.api";

export const useSignup = () => {
  const postSignup = useMutation<void, Error, SignupFormType>({
    mutationFn: signup,
    onError: (error) => console.error(error),
  });

  return { postSignup };
};
