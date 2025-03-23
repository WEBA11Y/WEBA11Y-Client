import axios from "axios";

export const getFriendlyMessage = (err: unknown): string => {
  // 에러메시지 파일 수정 필요
  if (axios.isAxiosError(err)) {
    const status = err.response?.status;
    const code = err.response?.data?.code as string | undefined;
    const msg = err.message.toLowerCase();

    switch (code) {
      case "AUTH_EXPIRED":
        return "세션이 만료되었습니다. 다시 로그인해주세요.";
      case "FORBIDDEN":
        return "접근 권한이 없습니다.";
      case "NOT_FOUND":
        return "요청하신 정보를 찾을 수 없습니다.";
    }

    switch (status) {
      case 401:
        return "로그인이 필요합니다.";
      case 403:
        return "접근 권한이 없습니다.";
      case 404:
        return "페이지를 찾을 수 없습니다.";
      case 500:
        return "서버에 문제가 발생했습니다.";
    }

    if (msg.includes("network")) return "네트워크 연결이 원활하지 않습니다.";
    if (msg.includes("timeout")) return "요청 시간이 초과되었습니다.";
  }

  return "예기치 못한 오류가 발생했습니다. 잠시 후 다시 시도해주세요.";
};
