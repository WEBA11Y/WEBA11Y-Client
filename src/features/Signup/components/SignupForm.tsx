import { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

import { PATH } from "../../../constants/path";
import Typography from "../../../components/Typography";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { useSignup } from "../hooks/useSignup";
import { SignupFormType } from "../types/signup.d";
import { useCheckDuplicate } from "../hooks/useCheckDuplicate";

export default function SignupForm() {
  const navigate = useNavigate();
  const { postSignup } = useSignup();
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    clearErrors,
    watch,
    formState: { errors },
  } = useForm<SignupFormType>();

  const userIdCheck = useCheckDuplicate();
  const phoneCheck = useCheckDuplicate();

  const [isUserIdChecked, setIsUserIdChecked] = useState(false);
  const [isPhoneChecked, setIsPhoneChecked] = useState(false);

  const username = watch("username");
  const userId = watch("userId");
  const password = watch("password");
  const phone = watch("phone");

  const isFormValid =
    username?.trim() !== "" &&
    userId?.trim() !== "" &&
    password?.trim() !== "" &&
    phone?.trim() !== "" &&
    isUserIdChecked &&
    isPhoneChecked;

  const handleCheckUserId = () => {
    const userId = getValues("userId");

    if (!userId) return;

    if (!/^[a-z0-9]{5,15}$/.test(userId)) {
      setError("userId", {
        type: "manual",
        message: "5~15자의 영문 소문자 또는 숫자여야 합니다.",
      });
      return;
    }

    userIdCheck.mutate(
      { value: userId, type: "userId" },
      {
        onSuccess: (data) => {
          if (data.isDuplicate) {
            setError("userId", {
              type: "manual",
              message: "이미 사용 중인 아이디입니다.",
            });
            setIsUserIdChecked(false);
          } else {
            clearErrors("userId");
            setIsUserIdChecked(true);
          }
        },
      }
    );
  };

  const handleCheckPhone = () => {
    const phone = getValues("phone");
    if (!phone) return;

    if (!/^\d{10,11}$/.test(phone)) {
      setError("phone", {
        type: "manual",
        message: "숫자로만 이루어진 10~11자리여야 합니다.",
      });
      return;
    }

    phoneCheck.mutate(
      { value: phone, type: "phone" },
      {
        onSuccess: (data) => {
          if (data.isDuplicate) {
            setError("phone", {
              type: "manual",
              message: "이미 사용 중인 전화번호입니다.",
            });
            setIsPhoneChecked(false);
          } else {
            clearErrors("phone");
            setIsPhoneChecked(true);
          }
        },
      }
    );
  };

  const onSubmit = (data: SignupFormType) => {
    if (!isUserIdChecked) {
      alert("아이디 중복확인을 해주세요.");
      return;
    }
    if (!isPhoneChecked) {
      alert("전화번호 중복확인을 해주세요.");
      return;
    }

    if (!/^(?=.*[a-zA-Z])(?=.*\d)[A-Za-z\d]{8,16}$/.test(password)) {
      setError("password", {
        type: "manual",
        message: "8~16자, 문자+숫자를 포함해야 합니다.",
      });
      return;
    }

    postSignup.mutate(data, {
      onSuccess: () => {
        navigate(PATH.SIGNIN);
      },
    });
  };

  return (
    <SignupFormContainer>
      <div className='title'>
        <Typography variant='title' size='sm'>
          회원가입
        </Typography>
        <Typography variant='text' size='sm'>
          더 많은 사람들과 소통하는 웹, 검수 서비스로 시작하세요.
        </Typography>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type='text'
          name='username'
          label='이름'
          placeholder='이름'
          register={register}
          error={errors.username?.message}
        />

        <div className='input-with-button'>
          <Input
            type='text'
            name='userId'
            label='아이디'
            placeholder='아이디 5~15자, 소문자+숫자'
            register={register}
            error={errors.userId?.message}
          />
          <Button
            type='button'
            size='small'
            variant='outline'
            onClick={handleCheckUserId}
          >
            {isUserIdChecked ? "확인 완료" : "중복 확인"}
          </Button>
        </div>

        <Input
          type='password'
          name='password'
          label='비밀번호'
          placeholder='비밀번호 8~16자, 문자+숫자'
          register={register}
          error={errors.password?.message}
        />

        <div className='input-with-button'>
          <Input
            type='text'
            name='phone'
            label='전화번호'
            placeholder='전화번호 '
            register={register}
            error={errors.phone?.message}
          />
          <Button
            type='button'
            variant='outline'
            size='small'
            onClick={handleCheckPhone}
          >
            {isPhoneChecked ? "확인 완료" : "중복 확인"}
          </Button>
        </div>

        <Button
          variant='fill'
          size='full'
          type='submit'
          disabled={!isFormValid}
        >
          회원가입
        </Button>
      </form>

      <div className='auth'>
        <Typography variant='text' size='xs'>
          이미 계정이 있으신가요?
        </Typography>
        <button type='button' onClick={() => navigate(PATH.SIGNIN)}>
          <Typography variant='button' size='sm'>
            로그인하기
          </Typography>
        </button>
      </div>
    </SignupFormContainer>
  );
}

const SignupFormContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 0 20px;

  .title {
    ${({ theme }) => theme.mixins.flexColumnCenter};
    margin-bottom: 30px;
    gap: 10px;
  }
  .input-with-button {
    display: flex;
    align-items: flex-start;
    gap: 10px;
  }
  .input-with-button button {
    height: 35px;
    border-radius: 8px;
  }
  .auth {
    margin-top: 20px;
    ${({ theme }) => theme.mixins.flexRowCenter};
    button {
      margin-left: 5px;
    }
  }
`;
