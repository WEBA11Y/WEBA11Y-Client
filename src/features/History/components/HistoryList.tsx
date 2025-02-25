import { styled } from "styled-components";

import DropshadowCard from "../../../components/DropshadowCard";
import AnalysisItem from "./AnalysisItem";
import { HistoryListData } from "../types/HistoryList";

interface Props {
  historyListData: HistoryListData[];
}
export default function HistoryList({ historyListData }: Props) {
  return (
    <DropshadowCard dropshadow>
      <Container>
        {historyListData.map((item) => (
          <AnalysisItem key={item.id} item={item} />
        ))}
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  height: calc(100vh - 350px);
`;
