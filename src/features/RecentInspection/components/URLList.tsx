import { styled } from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";

import Button from "../../../components/Button";
import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";

const urlData = [
  {
    id: 1,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 2,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 3,
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 4,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 5,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 6,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    name: "PawMate",
    date: "2024.09.08",
  },
  {
    id: 7,
    logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png",
    name: "PawMate",
    date: "2024.09.08",
  },
];

export default function URLList() {
  return (
    <DropshadowCard dropshadow>
      <Container>
        <Header>
          <Typography variant='text' size='mdBold'>
            {`등록된 URL (${urlData.length})`}
          </Typography>
          <Button size='small' variant='fill-outline' type='button'>
            더보기
          </Button>
        </Header>
        <List>
          {urlData.map((item) => (
            <ListItem key={item.id}>
              <LeftContent>
                <Logo src={item.logo} alt={`${item.name} logo`} />
                <TextContainer>
                  <Typography variant='text' size='mdBold'>
                    {item.name}
                  </Typography>
                  <Date variant='text' size='xs'>
                    {item.date}
                  </Date>
                </TextContainer>
              </LeftContent>
              <ExternalLink>
                <BsArrowUpRightCircle />
              </ExternalLink>
            </ListItem>
          ))}
        </List>
      </Container>
    </DropshadowCard>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 300px;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 -20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  padding: 0 20px 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex-grow: 1;
  overflow-y: auto;
`;

const ListItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const ExternalLink = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;
