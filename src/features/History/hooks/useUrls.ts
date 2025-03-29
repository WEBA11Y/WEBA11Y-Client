import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

import { deleteUrls, getUrlDetails, getUrls, registerUrls } from "../api/urls";
import { HistoryListData, UrlData } from "../types/HistoryList";

export const useUrls = () => {
  const queryClient = useQueryClient();

  const useUserUrls = () => {
    return useQuery({
      queryKey: ["urls"],
      queryFn: getUrls,
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 2,
      select: (data: HistoryListData[]) =>
        data.map((item) => ({
          id: item.id,
          summary: item.summary,
          createDate: item.createDate,
          logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
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
    return useMutation<void, Error, UrlData>({
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
