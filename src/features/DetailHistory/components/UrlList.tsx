import { FiCheckCircle } from "react-icons/fi";
import { styled } from "styled-components";

interface UrlItem {
  id: number;
  url: string;
  createDate: string;
}

interface Props {
  urls: UrlItem[];
  onCheck: (id: number) => void;
  checkedItems: number[];
}

export default function UrlList({ urls, onCheck, checkedItems }: Props) {
  return (
    <ListWrapper>
      {urls.length === 0 ? (
        <EmptyMessage>등록된 URL이 없습니다.</EmptyMessage>
      ) : (
        urls.map((item) => {
          const isChecked = checkedItems.includes(item.id);

          return (
            <ListItem key={item.id}>
              <div>
                <strong>{item.url}</strong>
                <SubText>
                  최신업데이트: {new Date(item.createDate).toLocaleDateString()}
                </SubText>
              </div>

              <CheckBox
                $isChecked={isChecked}
                onClick={() => {
                  onCheck(item.id);
                }}
              >
                <FiCheckCircle size={20} />
              </CheckBox>
            </ListItem>
          );
        })
      )}
    </ListWrapper>
  );
}

const ListWrapper = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  padding: 1rem;
  background: ${({ theme }) => theme.colors.common.white};
  border-radius: 1rem;
  margin-top: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  z-index: 1000;
  max-height: 400px;
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

const CheckBox = styled.button<{ $isChecked: boolean }>`
  color: ${({ theme, $isChecked }) =>
    $isChecked ? theme.colors.primary[500] : theme.colors.neutral[500]};
  font-size: 24px;
`;

const EmptyMessage = styled.div`
  padding: 2rem 1rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral[500]};
  font-size: 0.875rem;
`;
