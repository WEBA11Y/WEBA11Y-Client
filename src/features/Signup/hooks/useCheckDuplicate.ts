import { useMutation } from "@tanstack/react-query";
import axios from "axios";

interface CheckDuplicateResponse {
  isDuplicate: boolean;
}

interface CheckDuplicateParams {
  type: "userId" | "phone";
  value: string;
}

const checkDuplicate = async ({
  type,
  value,
}: CheckDuplicateParams): Promise<CheckDuplicateResponse> => {
  const response = await axios.get(`/api/v1/join/check-${type}?${type}=${value}
`);
  return response.data;
};

export const useCheckDuplicate = () => {
  return useMutation<CheckDuplicateResponse, Error, CheckDuplicateParams>({
    mutationFn: checkDuplicate,
  });
};
