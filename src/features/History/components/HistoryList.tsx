import { styled } from "styled-components";

import DropshadowCard from "../../../components/DropshadowCard";
import AnalysisItem from "./AnalysisItem";
import { HistoryListData } from "../types/HistoryList";

interface Props {
  historyListData: HistoryListData[];
  isDeleteMode: boolean;
  checkedItems: number[];
  onCheck: (id: number) => void;
}
export default function HistoryList({
  historyListData,
  isDeleteMode,
  checkedItems,
  onCheck,
}: Props) {
  // const { useUserUrls, useUrlDetails, useValidateUrl } = useUrls();
  // const { data: urls } = useUserUrls();
  // const { data: urls } = useQuery(useUserUrlsOption);

  // const { data: urlDetails } = useUrlDetails(1);
  // const { data: validate } = useValidateUrl("https://www.parent1.com");
  return (
    <DropshadowCard dropshadow>
      <Container>
        {historyListData.map((item) => (
          <AnalysisItem
            key={item.id}
            item={item}
            isDeleteMode={isDeleteMode}
            checkedItems={checkedItems}
            onCheck={onCheck}
          />
        ))}
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  height: calc(100vh - 350px);
`;
