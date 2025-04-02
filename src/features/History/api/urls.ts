import httpClient from "../../../api/http";
import { UrlData } from "../types/HistoryList";

export const registerUrls = async (urlData: UrlData) => {
  const response = await httpClient.post("/api/v1/urls", urlData);
  return response.data.id;
};

export const deleteUrls = async (urlIds: number[]) => {
  const response = await httpClient.delete(`/api/v1/urls`, { data: urlIds });
  return response.data;
};

export const getUrls = async () => {
  const response = await httpClient.get("/api/v1/urls");

  return response.data;
};

export const getUrlDetails = async (urlId: number) => {
  const response = await httpClient.get(`/api/v1/urls/${urlId}`);
  return response.data;
};
