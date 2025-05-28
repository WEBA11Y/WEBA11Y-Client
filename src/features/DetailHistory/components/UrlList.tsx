import { styled } from "styled-components";
import { MdLockOutline } from "react-icons/md";

interface UrlItem {
  url: string;
  date: string;
  isMain?: boolean;
}

interface Props {
  urls: UrlItem[];
}

export default function UrlList({ urls }: Props) {
  return (
    <ListWrapper>
      {urls.map((item) => (
        <ListItem key={item.url}>
          <div>
            <strong>{item.url}</strong>
            <SubText>최신업데이트 : {item.date}</SubText>
          </div>
          {item.isMain ? (
            <LockIcon>
              <MdLockOutline size={20} />
            </LockIcon>
          ) : (
            <DeleteButton>삭제</DeleteButton>
          )}
        </ListItem>
      ))}
    </ListWrapper>
  );
}
const ListWrapper = styled.div`
  position: absolute;
  top: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.common.white};
  border-radius: 1rem;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  width: 100%;
  max-width: 400px;
  height: 400px;
  overflow-y: auto;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding: 0.75rem 0;
`;

const SubText = styled.div`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.neutral[800]};
`;

const DeleteButton = styled.button`
  color: ${({ theme }) => theme.colors.primary[500]};
  font-size: 0.875rem;
`;

const LockIcon = styled.div`
  color: ${({ theme }) => theme.colors.neutral[400]};
`;
