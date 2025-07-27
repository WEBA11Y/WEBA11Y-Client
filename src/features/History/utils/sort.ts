import { HistoryListData } from "../types/HistoryList";

export const getSortedList = (data: HistoryListData[] = [], sort: string) => {
  switch (sort) {
    case "latest":
      return [...data].sort(
        (a, b) =>
          new Date(b.createDate).getTime() - new Date(a.createDate).getTime()
      );
    case "oldest":
      return [...data].sort(
        (a, b) =>
          new Date(a.createDate).getTime() - new Date(b.createDate).getTime()
      );
    case "name":
      return [...data].sort((a, b) =>
        a.description.localeCompare(b.description)
      );
    default:
      return data;
  }
};
