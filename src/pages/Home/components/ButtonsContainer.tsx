import { Button } from "@/components";
import React from "react";
import styled from "styled-components";
import { HiArrowRight } from "react-icons/hi";
export interface ButtonsContainerInterface {}

const ButtonsContainer: React.FC<ButtonsContainerInterface> = () => {
  return (
    <ButtonsContainerStyle>
      <Button
        isNavLink={true}
        name={<HiArrowRight></HiArrowRight>}
        link="/main"
      ></Button>
      <Button
        isNavLink={false}
        name="Github"
        link="https://github.com/MarcosFMC"
      ></Button>
      <Button
        isNavLink={false}
        name="Linkedin"
        link="https://www.linkedin.com/in/marcos-mendoza-5651b5205/"
      ></Button>
    </ButtonsContainerStyle>
  );
};

export const ButtonsContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  transform: translateX(-400px);
  width: 70%;

  animation-name: startAnimation;
  animation-delay: 0.5s;
  animation-duration: 1s;
  animation-fill-mode: forwards;

  @keyframes startAnimation {
    100% {
      transform: translateX(0px);
    }
  }
  @media screen and (max-width: 800px) {
  }
`;

export default ButtonsContainer;
