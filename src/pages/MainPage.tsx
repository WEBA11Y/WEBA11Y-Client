import { useForm } from "react-hook-form";
import { styled } from "styled-components";

import { TitleSection, InspectionForm } from "../features/Main";
import { InspectionFormType } from "../features/Main/types/main";
import Background from "../components/Background";

export default function MainPage() {
  const {
    register,
    formState: { errors },
  } = useForm<InspectionFormType>();

  return (
    <MainContainer>
      <Background />
      A11y
      <TitleSection />
      <InspectionForm register={register} errors={errors} />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 69px);
  padding: 100px;
  overflow: hidden;
`;
