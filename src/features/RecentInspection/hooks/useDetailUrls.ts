import { useQuery } from "@tanstack/react-query";

import { getDetailUrls } from "../api/urls";

export const useDetailUrls = (id: number) => {
  return useQuery({
    queryKey: ["detailUrls", id],
    queryFn: () => getDetailUrls(id),
    enabled: !!id, // id가 있을 때만 쿼리 실행
    staleTime: 5 * 60 * 1000, // 5분간 fresh 상태 유지
  });
};
