import { styled } from "styled-components";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

import Button from "../../../components/Button";
import DropshadowCard from "../../../components/DropshadowCard";
import Typography from "../../../components/Typography";
import { PATH } from "../../../constants/path";

const urlData = [
  {
    id: 1,
    name: "https://upload.wikimedia.org/wikipedia",
    date: "2024.09.08",
  },
  {
    id: 2,
    name: "https://upload.wikimedia.org/wikipedia",
    date: "2024.09.08",
  },
  {
    id: 3,
    name: "https://upload.wikimedia.org/wikipedia",
    date: "2024.09.08",
  },
  {
    id: 4,
    name: "https://upload.wikimedia.org/wikipedia",
    date: "2024.09.08",
  },
];

function getFirstPathSegment(url: string): string {
  try {
    const parsed = new URL(url);
    const segments = parsed.pathname.split("/").filter(Boolean);
    return segments.length > 0 ? `/${segments[0]}` : "/";
  } catch {
    return "/";
  }
}

export default function URLList() {
  return (
    <DropshadowCard dropshadow>
      <Container>
        <Header>
          <Typography variant='text' size='mdBold'>
            {`등록된 하위 URL (${urlData.length})`}
          </Typography>
          <Link to={`${PATH.HISTORY}/30`}>
            <Button size='small' variant='fill-outline' type='button'>
              더보기
            </Button>
          </Link>
        </Header>
        <List>
          {urlData.map((item) => (
            <ListItem key={item.id}>
              <LeftContent>
                <TextContainer>
                  <Typography variant='text' size='mdBold'>
                    {getFirstPathSegment(item.name)}
                  </Typography>
                  <Date variant='text' size='xs'>
                    {item.date}
                  </Date>
                </TextContainer>
              </LeftContent>
              <ExternalLink to={`${PATH.HISTORY}/30`}>
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
  justify-content: space-between;
  padding: 10px 0 10px;
  gap: 10px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
`;

const LeftContent = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: 200px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Date = styled(Typography)`
  color: ${({ theme }) => theme.colors.neutral[500]};
`;

const ExternalLink = styled(Link)`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.neutral[500]};
`;
