import { queryOptions } from "@tanstack/react-query";

import { getUrls } from "./urls";

export const useUserUrlsOption = queryOptions({
  queryKey: ["urls"],
  queryFn: getUrls,
  staleTime: 1000 * 60 * 5,
});
