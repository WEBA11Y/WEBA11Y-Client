// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// import { SSEData } from "../features/DetailHistory/types/SSEData";

// export default function StreamHistoryPage() {
//   const { urlId } = useParams();
//   const [resultData, setResultData] = useState<SSEData | null>(null);
//   const token = localStorage.getItem("accessToken");

//   useEffect(() => {
//     if (!urlId) return;

//     const eventSource = new EventSourcePolyfill(
//       `http://localhost:8080/api/v1/accessibility?urlId=${urlId}`,
//       {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       }
//     );

//     eventSource.onmessage = (e) => {
//       const parsedData: SSEData = JSON.parse(e.data);
//       console.log("parsedData:", parsedData);
//       // setResultData(parsedData);
//     };

//     eventSource.onerror = () => {
//       setResultData({
//         status: "error",
//         message: "검사 결과를 불러오는 데 실패했습니다.",
//         result: [],
//       });
//       eventSource.close();
//     };

//     return () => {
//       eventSource.close();
//     };
//   }, [urlId]);

//   return (
//     <div>
//       스트리밍 검사 페이지
//       {/* {resultData?.status === "processing" && <div>검사중</div>} */}
//       {resultData?.result && (
//         <div>
//           <div>{JSON.stringify(resultData?.result, null, 2)}</div>
//           <div>{JSON.stringify(resultData)}</div>
//         </div>
//       )}
//       {resultData?.status === "error" && (
//         <div>에러 발생 : 다시 시도해주세요</div>
//       )}
//     </div>
//   );
// }
