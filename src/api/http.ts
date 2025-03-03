import axios from "axios";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use(
  (req) => {
    return req;
  },
  (error) => {
    Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (res) => res,
  (error) => {
    const originalReq = error.config;
    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true;

      try {
        axios.post(
          `${import.meta.env.VITE_BASE_URL}/api/v1/reissuing-token`,
          {},
          { withCredentials: true }
        );
        return httpClient(originalReq);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
