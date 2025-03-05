import { useQuery } from "@tanstack/react-query";

import { getUrls } from "../api/getUrls";

export const useUrls = () => {
  return useQuery({
    queryKey: ["urls"],
    queryFn: getUrls,
    staleTime: 1000 * 60 * 5,
    refetchOnWindowFocus: false,
    retry: 2,
  });
};
