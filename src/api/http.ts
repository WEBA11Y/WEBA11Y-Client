import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const createClient = (config?: AxiosRequestConfig): AxiosInstance => {
  const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL,
    timeout: 1000,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
    ...config,
  });

  axiosInstance.interceptors.request.use(
    (req) => {
      const accessToken = cookies.get("accessToken");
      if (accessToken) {
        req.headers.Authorization = `Bearer ${accessToken}`;
      }
      return req;
    },
    (error) => Promise.reject(error)
  );

  axiosInstance.interceptors.response.use(
    (response) => response,
    async (error) => {
      const originalRequest = error.config;

      if (error.response?.status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;

        try {
          const { data } = await axios.post(" ", {}, { withCredentials: true });

          const newAccessToken = data.accessToken;

          originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

          return axiosInstance(originalRequest);
        } catch (refreshError) {
          console.error(refreshError);
          window.location.href = "/signin";
          return Promise.reject(refreshError);
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const httpClient = createClient();
