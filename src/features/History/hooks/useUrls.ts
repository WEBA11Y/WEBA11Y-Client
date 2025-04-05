import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import { deleteUrls, getUrlDetails, getUrls, registerUrls } from "../api/urls";
import { HistoryListData, UrlData } from "../types/HistoryList";

export const useUrls = () => {
  const queryClient = useQueryClient();

  const useUserUrls = (page: number) => {
    return useQuery({
      queryKey: ["urls", page],
      queryFn: () => getUrls(page),
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 2,
      select: (data: HistoryListData[]) =>
        data.map((item) => ({
          id: item.id,
          summary: item.summary,
          createDate: item.createDate,
          favicon: item.favicon,
        })),
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
    return useMutation<{ id: number }, AxiosError, UrlData>({
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

  return {
    useUserUrls,
    useUrlDetails,
    useRegisterUrl,
    useDeleteUrl,
  };
};
