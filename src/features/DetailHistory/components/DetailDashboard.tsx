import { styled } from "styled-components";
import { useState } from "react";

import InspectionList from "./InspectionList";
import Button from "../../../components/Button";
import ServiceHeader from "./ServiceHeader";
import UrlInputSection from "./UrlInputSection";
import { StatBox } from "../../RecentInspection";
import UrlList from "./UrlList";

export default function DetailDashboard() {
  const [showUrlList, setShowUrlList] = useState(false);
  const urlList = [
    {
      url: "https://kr.pinterest.com ",
      date: "2024.09.08",
      isMain: true,
    },
    { url: "https://kr.pinterest.com/test01", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test02", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test01", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test02", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test01", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test02", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test01", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test02", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test01", date: "2024.09.08" },
    { url: "https://kr.pinterest.com/test02", date: "2024.09.08" },
  ];
  return (
    <Container>
      <TopSection>
        <ServiceBox>
          <ServiceHeader
            showUrlList={showUrlList}
            setShowUrlList={setShowUrlList}
            onToggleList={() => {
              setShowUrlList((prev) => !prev);
            }}
          />

          {showUrlList && <UrlList urls={urlList} />}
          <ScoreGrid>
            <StatBox
              title='CRITICAL'
              value={1}
              color='red'
              showIcon='failure'
            />
            <StatBox
              title='SERIOUS'
              value={2}
              color='yellow'
              showIcon='review'
            />
            <StatBox
              title='MODERATE'
              value={3}
              color='blue'
              showIcon='checked'
            />
            <StatBox title='MINOR' value={4} color='black' showIcon='null' />
          </ScoreGrid>
        </ServiceBox>
        <UrlInputSection />
      </TopSection>
      <InspectionList />
      <BottomSection>
        <Button variant='outline' type='button'>
          목록으로
        </Button>
        <Button variant='fill' type='button'>
          재검사
        </Button>
      </BottomSection>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  max-width: 1020px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const BottomSection = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const TopSection = styled.div``;

const ServiceBox = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;
`;

const ScoreGrid = styled.div`
  display: flex;
  flex-direction: low;
  gap: 1rem;
`;
