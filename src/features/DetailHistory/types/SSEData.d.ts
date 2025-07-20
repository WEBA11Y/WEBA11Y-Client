export interface ResultData {
  id: number;
  inspectionItems: string;
  assessmentLevel: string;
  importance: string;
  summary: string;
  codeLine: string;
  createDate: string;
  updateDate: string;
}

export interface SSEData {
  // D, urlId 굳이 필요 없을 듯
  //   urlId: number;
  status: "completed" | "error" | "processing" | "canceled";
  message: string;
  result: ResultData[];
}
