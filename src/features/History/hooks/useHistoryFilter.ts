import { useState } from "react";

import { useDebounce } from "../../../hooks/useDebounce";
import { getSortedList } from "../utils/sort";
import { HistoryListData } from "../types/HistoryList";

export const useHistoryFilter = (originalList: HistoryListData[] = []) => {
  const [sort, setSort] = useState<string>("latest");
  const [search, setSearch] = useState<string>("");

  const debounceSearch = useDebounce(search, 300);

  const filteredData = originalList?.filter((item) =>
    item.summary.toLowerCase().includes(debounceSearch.toLowerCase())
  );

  const sortedList = getSortedList(filteredData, sort);

  return {
    sortedList,
    setSort,
    setSearch,
    search,
    sort,
  };
};
