import { useForm } from "react-hook-form";
import { styled } from "styled-components";

import Input from "../components/Input";
import Button from "../components/Button";
import Typography from "../components/Typography";
import background from "../assets/images/background.png";
import { InspectionFormType } from "../features/Main/types/main";

export default function MainPage() {
  const {
    register,
    formState: { errors },
  } = useForm<InspectionFormType>();

  return (
    <MainContainer>
      <div className='background' />

      <div className='title'>
        <Typography variant='title' size='mdBold' color='neutral900'>
          모든 사용자를 위한 웹
        </Typography>
        <Typography variant='title' size='mdRegular'>
          접근성은 선택이 아닌 필수입니다.
        </Typography>
      </div>

      <Typography variant='text' size='mdRegular'>
        검수 서비스를 통해 여러분의 웹사이트를 더 많은 사람들에게 열어주세요.
      </Typography>

      <InspectionForm onSubmit={() => {}}>
        <Input
          type='text'
          name='serviceName'
          label='서비스 명'
          placeholder='서비스 명을 작성해주세요'
          register={register}
          error={errors.serviceName}
        />
        <Input
          type='text'
          name='url'
          label='url'
          placeholder='검수하고자 하는 URL을 넣어주세요'
          register={register}
          error={errors.url}
        />
        <Button type='submit' size='full' variant='darkFill'>
          검사하기
        </Button>
      </InspectionForm>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: calc(100vh - 69px);
  padding: 100px;
  overflow: hidden;
  .background {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 65vh;
    background-image: url(${background});
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    @media (max-width: 1200px) {
      height: 50vh;
    }
  }
`;

const InspectionForm = styled.form`
  width: 100%;
  max-width: 350px;
  margin-top: 30px;
`;
