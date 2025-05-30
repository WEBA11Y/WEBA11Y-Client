import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";

import {
  deleteUrls,
  getUrlDetails,
  getUrls,
  registerUrls,
  testUrls,
  updateUrl,
} from "../api/urls";
import { HistoryListProps, UrlData, UrlDetail } from "../types/HistoryList";

export const useUrls = () => {
  const queryClient = useQueryClient();

  const useUserUrls = (page: number) => {
    return useQuery({
      queryKey: ["urls", page],
      queryFn: () => getUrls(page),
      staleTime: 1000 * 60 * 5,
      refetchOnWindowFocus: false,
      retry: 2,
      select: (data: HistoryListProps) => ({
        content: data.content.map((item) => ({
          id: item.id,
          summary: item.summary,
          createDate: item.createDate,
          favicon: item.favicon,
        })),
        currentPage: data.currentPage,
        totalPage: data.totalPage,
      }),
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

  const useUrlTest = (urlId: number) => {
    return useQuery({
      queryKey: ["urlResult", urlId],
      queryFn: () => testUrls(urlId),
    });
  };

  const useUpdateUrl = () => {
    return useMutation({
      mutationFn: ({
        id,
        data,
      }: {
        id: number;
        data: { summary: string; parentId: number; url: string };
      }) => updateUrl(id, data),

      onSuccess: (_, { id, data }) => {
        queryClient.setQueryData<UrlDetail>(["url", id], (old) => {
          if (!old) return old;
          return {
            ...old,
            summary: data.summary,
          };
        });
      },
    });
  };

  return {
    useUserUrls,
    useUrlDetails,
    useRegisterUrl,
    useDeleteUrl,
    useUrlTest,
    useUpdateUrl,
  };
};
