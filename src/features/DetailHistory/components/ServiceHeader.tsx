import { styled } from "styled-components";
import { FiEdit2, FiExternalLink, FiList, FiX, FiTrash2 } from "react-icons/fi";
import { useState } from "react";

import EditModal from "../../../components/modal/EditModal";

interface Props {
  onToggleList: () => void;
  showUrlList: boolean;
  onTrashClick: () => void;
  url: string;
  urlId: number;
  summary: string;
  parentId: number;
  favicon: string;
}

export default function ServiceHeader({
  onToggleList,
  showUrlList,
  onTrashClick,
  url,
  urlId,
  summary,
  parentId,
  favicon,
}: Props) {
  const [isEditOpen, setIsEditOpen] = useState(false);

  return (
    <>
      <HeaderWrapper>
        <InfoBox>
          <ServiceIcon>
            <Logo src={favicon} alt={`${summary} logo`} />
          </ServiceIcon>
          <div>
            <Title>
              {summary}
              <EditButton
                onClick={() => setIsEditOpen(true)}
                aria-label='서비스명 변경'
              >
                <FiEdit2 size={16} />
              </EditButton>
            </Title>
            <Link href={url} target='_blank' rel='noopener noreferrer'>
              서비스 링크 <FiExternalLink size={14} />
            </Link>
          </div>
        </InfoBox>

        {showUrlList ? (
          <div className='right-boxes'>
            <RightBox onClick={onToggleList} aria-label='URL 목록 닫기'>
              <FiX size={20} />
            </RightBox>
            <DeleteBox onClick={onTrashClick} aria-label='선택 URL 삭제'>
              <FiTrash2 size={20} />
            </DeleteBox>
          </div>
        ) : (
          <RightBox onClick={onToggleList} aria-label='URL 목록 열기'>
            <FiList size={20} />
          </RightBox>
        )}
      </HeaderWrapper>

      {isEditOpen && (
        <EditModal
          onClose={() => setIsEditOpen(false)}
          urlId={urlId}
          summary={summary}
          parentId={parentId}
          url={url}
        />
      )}
    </>
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
  border: 1px solid ${({ theme }) => theme.colors.neutral[300]};
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

const EditButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  color: ${({ theme }) => theme.colors.neutral[700]};
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
