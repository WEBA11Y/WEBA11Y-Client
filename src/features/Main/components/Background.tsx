import { styled } from "styled-components";

import background from "../../../assets/images/background.png";

export default function Background() {
  return <BackgroundContainer className='background' />;
}

const BackgroundContainer = styled.div`
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
`;
