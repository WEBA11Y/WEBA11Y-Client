import httpClient from "../../../api/http";

export const getDetailUrls = async (id: number) => {
  const response = await httpClient.get(`/api/v1/urls/${id}`);
  console.log(response.data);
  return response.data;
};
