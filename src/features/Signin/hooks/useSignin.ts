import { useMutation } from "@tanstack/react-query";

import { SigninFormType } from "../types/signin.d";
import { signin } from "../api/signin.api";

export const useSignin = () => {
  const postSignin = useMutation<void, Error, SigninFormType>({
    mutationFn: signin,
    onError: (error) => console.error(error),
  });

  return { postSignin };
};
