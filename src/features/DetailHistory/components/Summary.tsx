import { styled } from "styled-components";
import { BsBoxArrowUpRight } from "react-icons/bs";

import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";
import HalfCircleProgress from "../../../components/HalfCircleProgress";

export default function Summary() {
  return (
    <DropshadowCard dropshadow>
      <Container>
        <TopSection>
          <Logo
            src={
              "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
            }
            alt={`logo`}
          />
          <ServiceBox>
            <Title variant='title' size='xs'>
              웹접근성 서비스
            </Title>
            <Link variant='text' size='mdRegular'>
              서비스 링크 <BsBoxArrowUpRight />
            </Link>
          </ServiceBox>
        </TopSection>
        <BottomSection>
          <HalfCircleProgress
            label='실패'
            value={8}
            total={20}
            color={"#E63946"}
          />
          <HalfCircleProgress
            label='검토'
            value={8}
            total={20}
            color={"#FFC947"}
          />
          <HalfCircleProgress
            label='권장'
            value={8}
            total={20}
            color={"#2A6F97"}
          />
        </BottomSection>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  height: 250px;
`;

const Logo = styled.img`
  width: 48px;
  height: 48px;
  border-radius: 20%;
  background-color: ${({ theme }) => theme.colors.neutral[100]};
`;

const ServiceBox = styled.div``;
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

const TopSection = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 30px;
`;

const BottomSection = styled.div`
  padding: 15px;
  display: flex;
  justify-content: space-between;
`;
