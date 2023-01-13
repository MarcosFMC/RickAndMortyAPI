import { ButtonLinks, ButtonRoutes } from "@/components";
import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { SCUIButtons } from "../styled-components";
export interface IUIButtons {}

const UIButtons: React.FC<IUIButtons> = () => {
  return (
    <SCUIButtons>
      <ButtonRoutes path="/main">
        <HiArrowRight />
      </ButtonRoutes>
      <ButtonLinks link="https://github.com/MarcosFMC">Github</ButtonLinks>
      <ButtonLinks link="https://www.linkedin.com/in/marcos-mendoza-5651b5205/">
        Linkedin
      </ButtonLinks>
    </SCUIButtons>
  );
};

export default UIButtons;
