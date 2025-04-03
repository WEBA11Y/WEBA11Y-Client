import { styled } from "styled-components";

import DropshadowCard from "../../../components/DropshadowCard";
import AnalysisItem from "./AnalysisItem";
import { HistoryListData } from "../types/HistoryList";

interface Props {
  sortedList: HistoryListData[];
  isDeleteMode: boolean;
  checkedItems: number[];
  onCheck: (id: number) => void;
  searchKeyword: string;
}
export default function HistoryList({ ...rest }: Props) {
  return (
    <DropshadowCard dropshadow>
      <Container>
        {rest.sortedList.map((item) => (
          <AnalysisItem key={item.id} item={item} {...rest} />
        ))}
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  height: calc(100vh - 350px);
`;
