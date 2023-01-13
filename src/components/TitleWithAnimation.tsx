import React from "react";
import { SCHomeTitle } from "@/styled-components";

export interface ITitleWithAnim {
  children: string;
}

const TitleWithAnimation: React.FC<ITitleWithAnim> = ({ children }) => {
  return <SCHomeTitle>{children}</SCHomeTitle>;
};

export default TitleWithAnimation;
