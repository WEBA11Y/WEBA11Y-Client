export type HistoryListData = {
  id: number;
  summary: string;
  createDate: string;
  favicon: string;
};

export type UrlData = {
  summary: string;
  url: string;
  parentId: number | null;
};
