import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { SSEData } from "../features/DetailHistory/types/SSEData";

export default function StreamHistoryPage() {
  const { urlId } = useParams();
  const [resultData, setResultData] = useState<SSEData | null>(null);
  const token = localStorage.getItem("accessToken");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("urlId:", urlId, "token:", token);

    if (!urlId || !token) return;
    // URL에 Authorization 헤더를 쿼리 파라미터로 전달
    const url = `http://localhost:8080/api/v1/accessibility?urlId=${urlId}&token=${token}`;

    const eventSource = new EventSource(url);

    eventSource.onopen = () => {
      console.log("SSE 연결이 열렸습니다.");
    };

    eventSource.onmessage = (e) => {
      try {
        const parsedData: SSEData = JSON.parse(e.data);
        console.log("parsedData:", parsedData);
        setResultData(parsedData);
        navigate(`/stream/${urlId}`);
      } catch (error) {
        console.error("데이터 파싱 에러:", error);
        setResultData({
          status: "error",
          message: "데이터 파싱에 실패했습니다.",
          result: [],
        });
      }
    };

    eventSource.onerror = (error) => {
      console.error("SSE 에러:", error);
      setResultData({
        status: "error",
        message: "검사 결과를 불러오는 데 실패했습니다.",
        result: [],
      });
      eventSource.close();
    };

    return () => {
      eventSource.close();
    };
  }, [urlId, token]);

  return (
    <div>
      <h1>스트리밍 검사 페이지</h1>
      {resultData?.status === "processing" && <div>검사중...</div>}
      {resultData?.result && (
        <div>
          <h2>검사 결과:</h2>
          <pre>{JSON.stringify(resultData?.result, null, 2)}</pre>
          <h2>전체 데이터:</h2>
          <pre>{JSON.stringify(resultData, null, 2)}</pre>
        </div>
      )}
      {resultData?.status === "error" && (
        <div style={{ color: "red" }}>
          에러 발생: {resultData.message || "다시 시도해주세요"}
        </div>
      )}
      {resultData?.status === "completed" && (
        <div style={{ color: "green" }}>검사가 완료되었습니다!</div>
      )}
    </div>
  );
}
