export type HistoryListData = {
  id: number;
  summary: string;
  createDate: string;
  favicon: string;
};

export type HistoryListProps = {
  content: HistoryListData[];
  currentPage: number;
  totalPage: number;
};

export type UrlData = {
  summary: string;
  url: string;
  parentId: number | null;
};
