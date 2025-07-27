export type HistoryListData = {
  id: number;
  description: string;
  createDate: string;
  favicon: string;
};

export type HistoryListProps = {
  content: HistoryListData[];
  currentPage: number;
  totalPage: number;
};

export type UrlData = {
  description: string;
  url: string;
  parentId: number | null;
};

export interface UrlDetail {
  id: number;
  description: string;
  url: string;
  favicon: string;
  parentId: number | null;
  child: UrlDetail[];
  createDate: string;
  updateDate: string;
}
