import httpClient from "../../../api/http";

export const getUrls = async () => {
  const response = await httpClient.get("/api/v1/urls");
  return response.data;
};
