import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import {
  deleteUrls,
  getUrlDetails,
  getUrls,
  registerUrls,
  validateUrl,
} from "../api/urls";

export const useUrls = () => {
  const queryClient = useQueryClient();

  const useUserUrls = () => {
    return useQuery({
      queryKey: ["urls"],
      queryFn: getUrls,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 2,
    });
  };

  const useUrlDetails = (urlId: number) => {
    return useQuery({
      queryKey: ["url", urlId],
      queryFn: () => getUrlDetails(urlId),
      enabled: !!urlId,
    });
  };

  const useRegisterUrl = () => {
    return useMutation({
      mutationFn: registerUrls,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["urls"] });
      },
    });
  };

  const useDeleteUrl = () => {
    return useMutation({
      mutationFn: deleteUrls,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["urls"] });
      },
    });
  };

  const useValidateUrl = (url: string) => {
    return useQuery({
      queryKey: ["validateUrl", url],
      queryFn: () => validateUrl(url),
      enabled: !!url,
      retry: 1,
    });
  };

  return {
    useUserUrls,
    useUrlDetails,
    useRegisterUrl,
    useDeleteUrl,
    useValidateUrl,
  };
};
