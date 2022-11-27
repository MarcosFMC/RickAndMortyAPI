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
  width: 70%;

  animation: start 1s ease-out 0s 1 normal forwards;

  @keyframes start {
    0% {
      opacity: 0;
      transform: translateX(-250px);
    }

    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
`;

export default ButtonsContainer;
