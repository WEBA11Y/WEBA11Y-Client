import { styled } from "styled-components";
import { FiEdit2, FiExternalLink, FiList, FiX, FiTrash2 } from "react-icons/fi";

export default function ServiceHeader({
  onToggleList,
  showUrlList,
  onTrashClick,
}: {
  onToggleList: () => void;
  showUrlList: boolean;
  onTrashClick: () => void;
}) {
  return (
    <HeaderWrapper>
      <InfoBox>
        <ServiceIcon>X</ServiceIcon>
        <div>
          <Title>
            웹접근성 서비스 <FiEdit2 size={16} />
          </Title>
          <Link href='#'>
            서비스 링크 <FiExternalLink size={14} />
          </Link>
        </div>
      </InfoBox>

      {showUrlList ? (
        <div className='right-boxes'>
          <RightBox onClick={onToggleList}>
            <FiX size={20} />
          </RightBox>
          <DeleteBox onClick={onTrashClick}>
            <FiTrash2 size={20} />
          </DeleteBox>
        </div>
      ) : (
        <RightBox onClick={onToggleList}>
          <FiList size={20} />
        </RightBox>
      )}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.colors.common.white};
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  margin-bottom: 1rem;
  height: 100%;
  .right-boxes {
    display: flex;
    gap: 0.5rem;
  }
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const ServiceIcon = styled.div`
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.common.white};
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 20px;
`;

const Title = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Link = styled.a`
  font-size: 0.875rem;
  color: gray;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const RightBox = styled.div`
  background: ${({ theme }) => theme.colors.common.black};
  color: ${({ theme }) => theme.colors.common.white};
  padding: 0.5rem;
  border-radius: 0.75rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;
const DeleteBox = styled(RightBox)`
  background: ${({ theme }) => theme.colors.primary[500]};
  color: ${({ theme }) => theme.colors.common.white};
`;
