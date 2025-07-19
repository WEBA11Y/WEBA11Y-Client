import { styled } from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

import DropshadowCard from "../../../components/DropshadowCard";
import Button from "../../../components/Button";
import Typography from "../../../components/Typography";
import StatBox from "./StatBox";

export default function Summary() {
  return (
    <DropshadowCard dropshadow>
      <Container>
        <Header>
          <ServiceContainer>
            <Logo
              src='https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg'
              alt='서비스 로고'
            />
            <ServiceInfo>
              <Title variant='title' size='xs'>
                웹접근성 서비스
              </Title>
              <Link variant='text' size='mdRegular'>
                서비스 링크 <BsBoxArrowUpRight />
              </Link>
            </ServiceInfo>
          </ServiceContainer>
          <DetailButton>
            <Button variant='darkFill' type='button'>
              상세보기
            </Button>
          </DetailButton>
        </Header>
        <StatsContainer>
          <StatBox
            title='총 위반 갯수'
            value={1}
            color='red'
            showIcon='failure'
          />
          <StatBox title='미수정' value={2} color='yellow' showIcon='review' />
          <StatBox
            title='수정완료'
            value={3}
            color='blue'
            showIcon='recommoendation'
          />
        </StatsContainer>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 20px;
`;

const Header = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

const Logo = styled.img`
  width: 40px;
  height: 40px;
`;

const ServiceContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ServiceInfo = styled.div``;

const Title = styled(Typography)``;

const Link = styled(Typography)`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ theme }) => theme.colors.neutral[600]};
  svg {
    font-size: 14px;
    transform: translateY(-2px);
  }
`;

const DetailButton = styled.button``;

const StatsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;
