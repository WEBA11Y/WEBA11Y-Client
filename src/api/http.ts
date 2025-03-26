import axios from "axios";

import { PATH } from "../constants/path";

const httpClient = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 1000,
  withCredentials: true, // 쿠키 기반 인증 시 필요함
  headers: { "Content-Type": "application/json" },
});

httpClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

httpClient.interceptors.response.use(
  (res) => res, // 응답 성공적인 경우 그대로 반환
  async (error) => {
    const originalReq = error.config;
    // accessToken 만료로 401 응답 / 그리고 재시도한 적이 없을 경우
    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true; // 중복 재시도 막기 위함
      try {
        // 토큰 재발급 요청
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}api/v1/reissuing-token`,
          {
            withCredentials: true,
          }
        );

        const newAccessToken = res.data;

        if (newAccessToken) {
          localStorage.setItem("accessToken", newAccessToken);
          // 원래 요청에 새 토큰을 넣어 다시 요청
          originalReq.headers.Authorization = `Bearer ${newAccessToken}`;
          return httpClient(originalReq);
        } else {
          throw new Error("재발급된 accessToken이 없습니다.");
        }
      } catch (reissueError) {
        localStorage.removeItem("accessToken");
        window.location.href = PATH.HOME;
        return Promise.reject(reissueError);
      }
    }
    return Promise.reject(error);
  }
);

export default httpClient;
